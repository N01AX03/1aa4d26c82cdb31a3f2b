//  using data across columns and rows in a table file

//  ******************************************
//  create Cloud class

class Cloud {

    //  create Cloud constructor
    constructor (init_col_num) {
        this.column_num = init_col_num;
        this.pos_x = this.column_num * grid_width + grid_width/2;
			  this.pos_y = 120;

        //tamany dels núvols!!
        var precipitation_value = precipitation_array[this.column_num] - 1;
        this.cloud_width = map(precipitation_value, min_precipitation -1, max_precipitation -1, 30, 80);
        this.cloud_height = map(precipitation_value, min_precipitation -1, max_precipitation -1, 30, 80);
        this.num_snowflakes =  ((precipitation_array[this.column_num] - 1) * max_num_snowflakes);

        this.snowflake_array = [];
        snowflake_array = [this.num_snowflakes];

        // create a set of snowflakes within each cloud (each month)
        //  number of snowflakes is proportional to the average snowfall each month
        for (var i = 0; i < this.num_snowflakes; i++) {
            this.snowflake_array[i] = new Snowflake(this.column_num);
        }  // end of for loop

    }  // end of Cloud constructor

    //  create Cloud methods
    displayCloud() {
        //  create "clouds", size based on average amount of precipitation by month
        fill(129, 73, 255);
        noStroke();
        ellipse(this.pos_x, this.pos_y, this.cloud_width, this.cloud_height);

    }  // end of displayCloud method

}  // end of Cloud class

//  ******************************************

class Snowflake {

    // create Snowflake constructor
    constructor (init_col_num) {
        this.col_num = init_col_num;
        //  find upper left corner of relevant grid
        var centre_x = (this.col_num * grid_width + grid_width/2);
        this.pos_x = centre_x;
        this.pos_y = 120;
        this.speed_y = random(1, 3);
			  this.diameter = random(10,20);
        //lifespan = 500;

    }  // end of Snowflake constructor

    //  create Snowflake methods
    updateSnowflake() {
        this.pos_x = this.pos_x + random(-0.4, 0.4);
        this.pos_y = this.pos_y + this.speed_y + random(-0.5, 0.1);

    }  //  end of updateSnowflake method

    checkEdges() {
        if (this.pos_y > height) {
            this.pos_y = 120;
            this.speed_y = random(1, 3);
        }  // end of checkEdges

    }  // end of checkEdges method


    displaySnowflake() {
      //color fluid
        fill(100,random(50,70),0);
        //fill(random(100,150),random(100,160),0);
        //fill(random(75,100),random(50,70),random(0,33));
        noStroke();
        ellipse(this.pos_x, this.pos_y, this.diameter, this.diameter);

    }  // end of displaySnowflake method

}  // end of Snowflake class


//  *******************************************


//  declare variables
var grid_width, grid_height;
let num_columns = 12;
let num_rows = 2;
let margin = 20;  //  allows spacing around clouds in each month column
let max_num_snowflakes = 400;

var my_hue;
var month_array = ["JAN","FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
var high_temp_array = [25.9, 18.2, 7.4, 0.2, -3.1, -6.3, -8.6, -9.2, -5.4, 3.7, 16.4, 25.2];
var low_temp_array = [15.9,  7.4,  -3.9,  -11.6,  -15.6,  -19.4,  -22.5,  -23.4,  -19.7,  -10.3,  4.2,  14.9];
var precipitation_array = [1.1,  1.3,  1.6,  1.7,  1.5,  1.3,  1.5,  1.4,  1.6,  1.4,  1.1,  1.1];
var high_point, low_point;
var min_temperature, max_temperature;
var min_precipitation, max_precipitation;

snowflake_array = [];
cloud_array = [];

var my_cloud;
var my_snowflake;


//  set up canvas
function setup() {
    createCanvas(windowWidth, windowHeight);
    smooth();

    background(0);
    textSize(8);

    // initialize variables
    grid_width = width / num_columns;
    grid_height = height / num_rows;

    min_temperature = min(low_temp_array);
    max_temperature = max(high_temp_array);

    min_precipitation = min(precipitation_array);
    max_precipitation = max(precipitation_array);

    snowflake_array = [max_num_snowflakes];
    cloud_array = [num_columns];

    for (var i = 0; i < num_columns; i++) {
        cloud_array[i] = new Cloud(i);

    }  // end of for loop


    //noLoop();


}  // end of setup


//  draw objects on the screen
function draw() {
    background(255);

    //  colour is mapped to average high and low temperatures for the month (per column)
    for (var column = 0;  column < num_columns; column++) {
            var high_point = high_temp_array[column];
            my_hue = map(high_point, min_temperature, max_temperature, 0, 360);
//color fons
            fill(255);
            noStroke();
            rect(column * grid_width, 0, grid_width, grid_height);

    }  // end of for loop

    for (var column = 0;  column < num_columns; column++) {
            var low_point = low_temp_array[column];
            my_hue = map(low_point, min_temperature, max_temperature, 0, 360);
//color fons
            fill(255);
            noStroke();
            rect(column * grid_width, grid_height, grid_width, grid_height);

    }  // end of for loop


    //  display snowflakes
    for (var i = 0; i < max_num_snowflakes; i++) {

        for (var column = 0; column < num_columns; column++) {
            if (cloud_array[column].snowflake_array.length > i) {
                my_snowflake = cloud_array[column].snowflake_array[i];
                my_snowflake.updateSnowflake();
                my_snowflake.checkEdges();
                my_snowflake.displaySnowflake();
            }  // end of if

        }  // end of inner for loop

    }  // end of outer for loop


    //  display the clouds, needs to happen after initial display of snowflakes
    for (var i = 0; i < 12; i++) {
        my_cloud = cloud_array[i];
        my_cloud.displayCloud();

			  // add labels to clouds
			  textSize(15);
        textAlign(CENTER);
        fill(0);
        stroke(0);
        text(precipitation_array[i] + " in", my_cloud.pos_x, my_cloud.pos_y);
    }  // end of for loop


    //  add title at top of screen
    textSize(25);
    textAlign(CENTER);
    fill(0);
    stroke(0);
    text("Average high and low temperatures (F) and snowfall by month - Antarctica", width/2, 50);
    textSize(15);
    text("(January through December)", width/2, 80);

    //  add month labels near bottom of screen
    for (var i = 0; i < num_columns; i++) {
        textSize(15);
        textAlign(CENTER, CENTER);
        fill(255);
        stroke(255);
        text(month_array[i], i * grid_width + grid_width/2, height - 30);

    }  // end of for loop


}  // end of draw

























// let img;
//
// function preload() {
//   img = loadImage('https://66.media.tumblr.com/43d87b69206363bdcc5a33fc701503d6/bd7938921765df4f-41/s500x750/e0b14f81adf0d1f4eca08abf962b9bd64fe0aaa4.png');
// }
//
// function setup() {
//
//  createCanvas(windowWidth, windowHeight);
// background(153);
// line(0, 0, width, height);
// }
//
// function draw() {
// background(153);
//   image(img, 0,0, windowWidth, windowHeight);
//   ellipse(windowWidth/2, 50, 190, 80);
//   ellipse(windowWidth/2, 150, 190, 80);
//   ellipse(windowWidth/2, 250, 190, 80);
//   ellipse(windowWidth/2, 350, 190, 80);
//   ellipse(windowWidth/2, 450, 190, 80);
//   ellipse(windowWidth/2, 550, 190, 80);
//   ellipse(windowWidth/2, 550, 190, 80);
//   ellipse(windowWidth/2, 650, 190, 80);
//   ellipse(windowWidth/2, 750, 190, 80);
//
//   // x,y,amplada,alçada
// }
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
