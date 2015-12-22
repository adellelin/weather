var url = "http://api.wunderground.com/api/f1b00a034bf12858/conditions/q/new_york,NY.json"
var apiKey = "http://api.wunderground.com/api/f1b00a034bf12858/conditions/q/"
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

function setup() {
  createCanvas(800, 400);
  background(100,255,250);
  line(400, 0, 400, 400);
  //loadJSON(url, gotData);
  //loadJSON(apiKey + countryStr + "/" + cityStr + json, gotData);
  usaButton = createButton ("USA");
  usaButton.position(posX,50);
  usaButton.mousePressed(Usa);
  intButton = createButton ("International");
  intButton.position(posX + 50, 50);
  intButton.mousePressed(Int);
  function Int() {
    textAlign(RIGHT);
    makeInput();
    text("city A", posX, 110);
    text("Country A", posX, 210);
    intButton.remove();
    usaButton.remove();
    //buttonPressed();
  }
  function Usa() {
    textAlign(RIGHT);
    makeInput();
    text("city A", posX, 110);
    text("State A", posX, 210);
    intButton.remove();
    usaButton.remove();
    //buttonPressed();
  }
  usa2Button = createButton ("USA");
  usa2Button.position(posX + 400,50);
  usa2Button.mousePressed(Usa2);
  int2Button = createButton ("International");
  int2Button.position(posX + 450, 50);
  int2Button.mousePressed(Int2);
  function Int2() {
    textAlign(RIGHT);
    makeInput2();
    text("city B", posX + 400, 110);
    text("Country B", posX + 400, 210);
    int2Button.remove();
    usa2Button.remove();
    button2Pressed();
  }
  function Usa2() {
    textAlign(RIGHT);
    makeInput2();
    text("city B", posX + 400, 110);
    text("State B", posX + 400, 210);
    int2Button.remove();
    usa2Button.remove();
    button2Pressed();
  }

  function makeInput(){
    city =      {input: createInput(), sizeX: 150, sizeY: 30};
    country =   {input: createInput(), sizeX: 150, sizeY: 30};
    city.input.position(150, 100);
    country.input.position(150, 200);
    //console.log(country.size);
    country.input.size(country.sizeX, 10);
    city.input.size(city.sizeX, 10);
    //buttonPressed;
  }
    function makeInput2(){
    city2 =      {input: createInput(), sizeX: 150, sizeY: 30};
    country2 =   {input: createInput(), sizeX: 150, sizeY: 30};
    city2.input.position(550, 100);
    country2.input.position(550, 200);
    //console.log(country.size);
    country2.input.size(country2.sizeX, 10);
    city2.input.size(city2.sizeX, 10);
    button2Pressed;
  }
  /*
  function buttonPressed(){
    button = createButton("getWeather");
    button.position(posX, 300);
  }*/
    function button2Pressed(){
    button2 = createButton("getWeather");
    button2.position(posX + 400, 300);
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
   println(apiKey + countryStr + "/" + cityStr + json);
  //text(city.input.value() + "," + country.input.value(), 400, 200);
}

function drawWeather2() {
  
  line(400, 0, 400, 400);
  city2.input.remove();
  country2.input.remove();
  countryStr2 = String(country2.input.value());
  cityStr2 = String(city2.input.value());
  loadJSON(apiKey + countryStr2 + "/" + cityStr2 + json, gotData2);
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
    var temp2 = map(temp_f, 0, 100, 0, 400);
    fill(temp_f / 100 * 255, 255, 100);
    println(temp2);
    ellipse(200, 200, temp2, temp2);
    push();
    fill(0);
    // if (weather2){
    //   //background((temp_f2 - temp_f)/200 *255, 100, 100);
    // }
    textAlign(CENTER);
    text(cityStr + ", " + countryStr, 200, 50);
    text("current temp " + temp_f, 200, 200);
    pop();
    
  }
 // overlay();
}
function gotData2(data2) {
 // println(data.moon_phase.current_time.hour);
  //text(data.current_observation.weather, 200, 200);
    //fill((temp_f2 - temp_f)/200 *255, 100, 100, 50);
    temp_f2 = data2.current_observation.temp_f;
    var temp = map(temp_f2, 0, 100, 0, 400);
    println(temp);
    fill(temp_f2 / 100 * 255, 255, 100);
    ellipse(600, 200, temp, temp);
    line(400, 0, 400, 400);
    textAlign(CENTER);
    push();
    fill(0);
    text(cityStr2 + ", " + countryStr2, 600, 50);
    text("current temp " + temp_f2, 600, 200);
    pop();
    

   // overlay();
}

function overlay(){
    push();
    fill((Math.abs(temp_f2 - temp_f))/150 *255, 100, 100, 20);
    console.log(Math.abs(temp_f2 - temp_f));
    rect(0, 0, windowWidth, windowHeight);
    pop();
}