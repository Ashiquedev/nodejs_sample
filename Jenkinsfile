pipeline{
    agent {
         label 'jdk11'
          }
    stages{
        stage('clone the git repo'){
            steps{
                 git branch: 'main', changelog: false, url: 'https://github.com/Ashiquedev/nodejs_sample.git'
            }
        }
        stage('install the dependencies'){
            steps{
                 sh "npm install"                 
            }
        }
        stage('test'){  
            steps{
                sh "npm test"    
           }              
        }
        stage("SonarQube analysis") {
            steps {
              
                  sh "npm install sonar-scanner"
                  sh "npm run sonar"
              
            }
         }
        
        stage("build") {
            steps {
              sh "npm build"
              }
            }
        
        stage("pack") {
            steps {
              sh "npm pack"
              }
            }
        
    }
}
