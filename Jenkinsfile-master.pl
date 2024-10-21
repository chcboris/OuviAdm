pipeline {
    agent any
    tools {
         nodejs 'node-20'
    }
    stages {
        stage('Obter do GIT') {
                steps {
                    git branch: 'master',
                    credentialsId: 'jenkins-ssh',
                    url: 'ssh://git@toolbox.tre-rj.jus.br:3022/sedsis/ouvi.git'
                }
        }
        stage('Preparar Diretorios') {
                steps {
                    sh  '''
                        mkdir -p ouvi-build
                        mkdir -p ouvi-prod
                        mkdir -p ouvi-internet
                        rm -r ouvi-build/**
                        rm -r ouvi-prod/**
                        rm -r ouvi-internet/**
                        '''
                }
        }
        stage('Compilar e gerar versao prod') {
                steps {
                    sh  '''
                        npm install
                        npm run build-prod
                        '''
                }
			  }
        stage('Limpar e mover para diretorio prod') {
                steps {
                    sh  '''
                        mv dist/ouvi/browser/* ouvi-prod/
                        rm -rf node_modules
                        '''
                }
        }
        stage('Compactar arquivos gerados em war - prod') {
                steps {
                    sh  '''
                        version=`cat src/app/shared/util/constantes.ts|grep "versaoAtual"| cut -d "'" -f 2`
                        cd ouvi-prod
                        jar cf ouvi##prod_${version}.${BUILD_NUMBER}.war *
                        mv *.war ../ouvi-build
                        '''
                }
        }
        stage('Compilar e gerar versao internet') {
                steps {
                    sh  '''
                        npm install
                        npm run build-internet
                        '''
                }
			  }
        stage('Limpar e mover para diretorio internet') {
                steps {
                    sh  '''
                        mv dist/ouvi/browser/* ouvi-internet/
                        rm -rf node_modules
                        '''
                }
        }
        stage('Compactar arquivos gerados em war - internet') {
                steps {
                    sh  '''
                        version=`cat src/app/shared/util/constantes.ts|grep "versaoAtual"| cut -d "'" -f 2`
                        cd ouvi-internet
                        jar cf ouvi##internet_${version}.${BUILD_NUMBER}.war *
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
