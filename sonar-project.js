const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner({
  sonar.host.url: http://10.1.1.95:9000/,
  options:{
      sonar.projectKey: nodejs
      sonar.projectName: nodejs
      sonar.projectVersion: SNAPSHOT-1.0
      sonar.login: 3b150f577e7e0b247fa1cf485b3f9a2c22624261
      sonar.sources=.
      sonar.javascript.lcov.reportPaths: coverage/lcov.info
      sonar.sourceEncoding: UTF-8
},
                 },() => {});
