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
              withSonarQubeEnv('sonarqube') {
                  sh "npm install sonar-scanner"
                  sh "npm run sonar"
              }
            }
         }
        stage("Quality Gate") {
            steps {
              timeout(time: 5, unit: 'MINUTES') {
                waitForQualityGate abortPipeline: false
              }
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
