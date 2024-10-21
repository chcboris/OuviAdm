pipeline {
    agent any
    tools {
        nodejs 'node-20'    

    }
    stages {
        stage('Obter do GIT') {
                steps {
                    git branch: 'develop',
                    credentialsId: 'jenkins-ssh',
                    url: 'ssh://git@toolbox.tre-rj.jus.br:3022/sedsis/ouvi.git'
                }
        }
        stage('Preparar Diretorios') {
                steps {
                    sh  '''
                        mkdir -p ouvi-build
                        mkdir -p ouvi-desenv
                        mkdir -p ouvi-stage
                        rm -rf ouvi-build/**
                        rm -rf ouvi-desenv/**
                        rm -rf ouvi-stage/**
                        '''
                }
        }
        stage('Compilar e gerar versao desenv') {
                steps {
                    sh  '''
                        npm install
                        npm run build
                        '''
                }
			  }
        stage('Limpar e mover para diretorio desenv') {
                steps {
                    sh  '''
                        mv dist/ouvi/browser/* ouvi-desenv/
                        rm -rf node_modules
                        '''
                }
        }
        stage('Compactar arquivos gerados em war - desenv') {
                steps {
                    sh  '''
                        version=`cat src/app/shared/util/constantes.ts|grep "versaoAtual"| cut -d "'" -f 2`
                        cd ouvi-desenv
                        jar cf ouvi##desenv_${version}.${BUILD_NUMBER}.war *
                        mv *.war ../ouvi-build
                        '''
                }
        }
        stage('Compilar e gerar versao hmol') {
                steps {
                    sh  '''
                        npm install
                        npm run build-stage
                        '''
                }
			  }
        stage('Limpar e mover para diretorio stage') {
                steps {
                    sh  '''
                        mv dist/ouvi/browser/* ouvi-stage/
                        rm -rf node_modules
                        '''
                }
        }
        stage('Compactar arquivos gerados em war - stage') {
                steps {
                    sh  '''
                        version=`cat src/app/shared/util/constantes.ts|grep "versaoAtual"| cut -d "'" -f 2`
                        cd ouvi-stage
                        jar cf ouvi##hmol_${version}.${BUILD_NUMBER}.war *
                        mv *.war ../ouvi-build
                        '''
                }
        }

    }
    post {
        always {
            archiveArtifacts artifacts: 'ouvi-build/*.war', onlyIfSuccessful: true
        }
    }

}
