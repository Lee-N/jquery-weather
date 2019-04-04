# jquery-weather
基于jquery和bootstrap的天气插件
# 天气api调用https://www.tianqiapi.com
一个简单的天气插件。  
DOC:
   1. import
   ```
     <link rel="stylesheet" href="css/jquery-weather.css">
     <link rel="stylesheet" href="css/bootstrap.min.css">
     <script src="js/jquery-3.3.1.js"></script>
     <script src="js/bootstrap.min.js"></script>
     <script src="js/jquery-weather.js"></script>
   ```
   2.html
   ```
   <div id="weather"></div>
   ```
   3.js
   ```
  $(function () {
   $("#weather").weather();
  })
  ```
  4.options
  - city:""       like "镇江"  default:your position
  - skin:""       ["apple","banana","cherry","gif","grape","longan","mango","orange","peach",
                  "pear","pitaya","yahoo","cucumber","durian","cake","sogou"]
                  default:"sogou"
  - tips:         true/false   default:true
  
