var url = "http://api.wunderground.com/api/f1b00a034bf12858/conditions/q/new_york,NY.json"
var url_m = "http://api.wunderground.com/api/f1b00a034bf12858/astronomy/q/new_york,NY.json"
var apiKey = "http://api.wunderground.com/api/f1b00a034bf12858/conditions/q/"
var apiKeyA = "http://api.wunderground.com/api/f1b00a034bf12858/astronomy/q/"
var country, country2;
var city, city2;
var json = ".json";
var countryStr, countryStr2;
var cityStr, cityStr2;
var weather, weather2;
var button, button2;
var posX = 100;
var temp_f, temp_f2;
var size = 200;
var sW = screen.width;
var sH = screen.height;

function setup() {
  createCanvas(sW, sH);
  background(255,100,135);
  push();
  fill(180);
  noStroke();
  rect(sW/2, 0, sW/2, sH);
  pop();
  line(sW/2, 0, sW/2, sH);
  //loadJSON(url, gotData);
  //loadJSON(apiKey + countryStr + "/" + cityStr + json, gotData);
  usaButton = createButton ("USA");
  usaButton.position(sW/4 - 25,sH / 16);
  usaButton.mousePressed(Usa);
  intButton = createButton ("International");
  intButton.position(sW/4 + 25,sH / 16);
  intButton.mousePressed(Int);
  textSize(18);
  function Int() {
    textAlign(RIGHT);
    makeInput();
    push();
    textSize(28);
    text ("A", sW / 4 + 20, sH / 12);
    pop();
    text("City", sW / 4- 10, sH / 6);
    text("Country", sW / 4 - 10, sH / 4);
    intButton.remove();
    usaButton.remove();
    //buttonPressed();
  }
  function Usa() {
    textAlign(RIGHT);
    makeInput();
    push();
    textSize(28);
    text ("A", sW / 4 + 20, sH / 12);
    pop();
    text("City", sW / 4 - 10, sH / 6);
    text("State", sW / 4 - 10, sH / 4);
    intButton.remove();
    usaButton.remove();
    //buttonPressed();
  }
  usa2Button = createButton ("USA");
  usa2Button.position(sW * 3 / 4 - 25,sH / 16);
  usa2Button.mousePressed(Usa2);
  int2Button = createButton ("International");
  int2Button.position(sW * 3 / 4 + 25,sH / 16);
  int2Button.mousePressed(Int2);
  function Int2() {
    textAlign(RIGHT);
    makeInput2();
    push();
    textSize(28);
    text ("B", sW * 3 / 4 + 20, sH / 12);
    pop();
    text("City", sW * 3 / 4 - 10, sH / 6);
    text("Country", sW * 3/ 4 - 10, sH / 4);
    int2Button.remove();
    usa2Button.remove();
    button2Pressed();
  }
  function Usa2() {
    textAlign(RIGHT);
    makeInput2();
    push();
    textSize(28);
    text ("B", sW * 3 / 4 + 20, sH / 12);
    pop();
    text("City", sW * 3 / 4 - 10, sH / 6);
    text("State", sW * 3 / 4 - 10, sH / 4);
    int2Button.remove();
    usa2Button.remove();
    button2Pressed();
  }

  function makeInput(){
    city =      {input: createInput(), sizeX: 150, sizeY: 15};
    country =   {input: createInput(), sizeX: 150, sizeY: 15};
    city.input.position(sW / 4, sH / 6 - country.sizeY);
    country.input.position(sW / 4, sH / 4 - country.sizeY);
    //console.log(country.size);
    country.input.size(country.sizeX, country.sizeY);
    city.input.size(city.sizeX, country.sizeY);
    //buttonPressed;
  }
    function makeInput2(){
    city2 =      {input: createInput(), sizeX: 150, sizeY: 15};
    country2 =   {input: createInput(), sizeX: 150, sizeY: 15};
    city2.input.position(sW  * 3 / 4, sH / 6 - country2.sizeY);
    country2.input.position(sW * 3 / 4, sH / 4 - country2.sizeY);
    //console.log(country.size);
    country2.input.size(country2.sizeX, country2.sizeY);
    city2.input.size(city2.sizeX, country2.sizeY);
    button2Pressed;
  }
  /*
  function buttonPressed(){
    button = createButton("getWeather");
    button.position(posX, 300);
  }*/
    function button2Pressed(){
    button2 = createButton("getWeather");
    button2.position(sW * 3 / 4, sH / 3);
    button2.mousePressed(drawWeather);
    button2.mousePressed(drawWeather2);
  }
}

function draw() {

}

function drawWeather() {
  background(255);
  city.input.remove();
  country.input.remove();
  countryStr = String(country.input.value());
  cityStr = String(city.input.value());
  loadJSON(apiKey + countryStr + "/" + cityStr + json, gotData);
  loadJSON(apiKeyA + countryStr + "/" + cityStr + json, astData);
   println(apiKey + countryStr + "/" + cityStr + json);
  //text(city.input.value() + "," + country.input.value(), 400, 200);
}

function drawWeather2() {
  line(sW/2, 0, sW/2, sH);
  city2.input.remove();
  country2.input.remove();
  countryStr2 = String(country2.input.value());
  cityStr2 = String(city2.input.value());
  loadJSON(apiKey + countryStr2 + "/" + cityStr2 + json, gotData2);
  loadJSON(apiKeyA + countryStr2 + "/" + cityStr2 + json, astData2);
   println(apiKey + countryStr2 + "/" + cityStr2 + json);
  //text(city.input.value() + "," + country.input.value(), 400, 200);
  button2.remove();
}

function gotData(data) {
 // println(data.moon_phase.current_time.hour);
  //text(data.current_observation.weather, 200, 200);
  weather = data;
  if (weather) {
    temp_f = weather.current_observation.temp_f;
    temp_c = weather.current_observation.temp_c;
    var temp2 = map(temp_f, 0, 100, 0, 600);
    var fillRatio = temp_f / 100 * 255
    //fill(fillRatio, fillRatio, fillRatio);
    fill(fillRatio, 100, 135);
    println(temp2);
    noStroke();
    ellipse(sW / 4, sH / 2, temp2, temp2);
    push();
    // if (weather2){
    //   //background((temp_f2 - temp_f)/200 *255, 100, 100);
    // }
    textAlign(CENTER);
    fill(50);
    text(cityStr + ", " + countryStr, sW / 4, sH / 10);
    fill(255);
    text("Temp " + temp_c + " c", sW / 4, sH / 2 - 40);
    text("Temp " + temp_f + " f", sW / 4, sH / 2 - 20);
    text("Feels " + weather.current_observation.feelslike_f + " f", sW / 4, sH / 2);
    text(weather.current_observation.weather, sW / 4, sH / 2 + 20);
    pop();
  }
 // overlay();
}
function gotData2(data2) {
  weather2 = data2;
  if (weather2){
 // println(data.moon_phase.current_time.hour);
  //text(data.current_observation.weather, 200, 200);
    //fill((temp_f2 - temp_f)/200 *255, 100, 100, 50);
    temp_f2 = weather2.current_observation.temp_f;
    temp_c2 = weather2.current_observation.temp_c;
    var temp = map(temp_f2, 0, 100, 0, 600);
    println(temp);
    var fillRatio = temp_f2 / 100 * 255
    fill(fillRatio, fillRatio, fillRatio);
    noStroke();
    ellipse(sW * 3 / 4, sH / 2, temp, temp);
    textAlign(CENTER);
    push();
    fill(50);
    text(cityStr2 + ", " + countryStr2, sW * 3 / 4, sH / 10);
    fill(255);
    text("Temp " + temp_c2 + " c", sW * 3 / 4, sH / 2 - 40);
    text("Temp " + temp_f2 + " f", sW * 3 / 4, sH / 2 - 20);
    text("Feels " + weather2.current_observation.feelslike_f + " f", sW * 3 / 4, sH / 2);
    text(weather2.current_observation.weather, sW * 3 / 4, sH / 2 + 20);
    pop();
  }
   // overlay();
}

function overlay(){
    push();
    fill((Math.abs(temp_f2 - temp_f))/150 *255, 100, 100, 50);
    console.log(Math.abs(temp_f2 - temp_f));
    console.log(temp_f2);
    console.log(temp_f);
    rect(0, 0, windowWidth, windowHeight);
    pop();
}

function astData(moonData){
  fill(50);
  var moon = moonData.moon_phase.phaseofMoon;
  var timeH = moonData.moon_phase.current_time.hour;
  var timeM = moonData.moon_phase.current_time.minute;
  textAlign(CENTER);
  text("Time " + timeH + ":" + timeM, sW / 4, sH / 10 + 20);
  text("Moon Phase: " + moon, sW / 4, sH / 10 + 40);
}
function astData2(moonData2){
  fill(50);
  var moon = moonData2.moon_phase.phaseofMoon;
  var timeH = moonData2.moon_phase.current_time.hour;
  var timeM = moonData2.moon_phase.current_time.minute;
  textAlign(CENTER);
  text("Time " + timeH + ":" + timeM, sW * 3 / 4, sH / 10 + 20);
  text("Moon Phase: " + moon, sW * 3 / 4, sH / 10 + 40);
}