# jquery-weather
基于jquery和bootstrap的天气插件
# 天气api调用https://www.tianqiapi.com
## A simple Weather Plugin   
* 2019.2.2 Update API
## Online Demo [here](https://lee-n.github.io/jquery-weather/)  
## DOC:
   1. import
   ```
     <link rel="stylesheet" href="css/bootstrap.min.css">
     <link rel="stylesheet" href="css/jquery-weather.css">
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
   $("#weather").weather({city:"镇江",tips:false});
  })
  ```
  4.options
  - city &emsp;&emsp;&emsp;&emsp; like "镇江"&emsp;&emsp;&emsp;&emsp;default:your position  
  - skin &emsp;&emsp;&emsp;&emsp;["apple","banana","cherry","gif","grape","longan","mango","orange","peach"]  
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;["pear","pitaya","yahoo","cucumber","durian","cake","sogou"]  
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;default:"sogou"  
  - tips &emsp;&emsp;&emsp;&emsp;true/false&emsp;&emsp;&emsp;&emsp;&emsp;default:true
