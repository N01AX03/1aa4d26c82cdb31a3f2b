//  using data across columns and rows in a table file

//  ******************************************

// preload images
var persona1;
var persona2;
var persona3;
var face;
var logo;

function preload() {




   persona1 = loadImage('assets/persona1.png');

   face = loadImage('assets/earth.png');
 }

//  create Cloud class
class Cloud {

    //  create Cloud constructor
    constructor (init_col_num) {
        this.column_num = init_col_num;
        this.pos_x = this.column_num * grid_width + grid_width/2;
			  this.pos_y = 120;

        //tamany dels núvols!!
        var precipitation_value = precipitation_array[this.column_num] - 1;
        this.cloud_width = map(precipitation_value, min_precipitation -2, max_precipitation -2, 30, 80);
        this.cloud_height = map(precipitation_value, min_precipitation -2, max_precipitation -2, 30, 80);
        this.num_particles =  ((precipitation_array[this.column_num]-0.9)* max_num_particles);

        this.particles_array = [];
        particles_array = [this.num_particles];

        // create a set of particles within each cloud (each month)
        //  number of particles is proportional to the average snowfall each month
        for (var i = 0; i < this.num_particles; i++) {
            this.particles_array[i] = new Particles(this.column_num);
        }  // end of for loop

    }  // end of Cloud constructor

    //  create Cloud methods
    displayCloud() {
        //  create "clouds", size based on average amount of precipitation by month
        // fill(129, 73, 255);
        // noStroke();
        // ellipse(this.pos_x, this.pos_y, this.cloud_width, this.cloud_height);
          image(face, this.pos_x, this.pos_y, this.cloud_width, this.cloud_height);
          imageMode(CENTER);

    }  // end of displayCloud method

}  // end of Cloud class

//  ******************************************

class Particles {


    // create Particles constructor
    constructor (init_col_num) {
        this.col_num = init_col_num;
        //  find upper left corner of relevant grid
        var centre_x = (this.col_num * grid_width + grid_width/2);
        this.pos_x = centre_x;
        this.pos_y = 120;
        this.speed_y = random(1, 3);
			//  this.diameter = random(10,20);
      //  lifespan = 500;

    }  // end of Particles constructor

    //  create Particles methods
    updateParticles() {
        this.pos_x = this.pos_x + random(-0.4, 0.4);
        this.pos_y = this.pos_y + this.speed_y + random(-0.5, 0.1);

    }  //  end of updateParticles method

    checkEdges() {
        if (this.pos_y > height) {
            this.pos_y = 120;
            this.speed_y = random(1, 3);
        }  // end of checkEdges

    }  // end of checkEdges method


    displayParticles() {

      //color fluid
        //fill(100,random(50,70),0);
        //fill(random(100,150),random(100,160),0);
      //  fill(random(75,100),random(50,70),random(0,33));


        noStroke();
    //   ellipse(this.pos_x, this.pos_y, 20, 20);
      //  persona1.position(this.pos_x,this.pos_y)

image(persona1, this.pos_x, this.pos_y, 30, 30);

        //text( 'hola',this.pos_x, this.pos_y);

      //  ellipse(this.pos_x, this.pos_y, this.diameter, this.diameter);


    }  // end of displayParticles method

}  // end of Particles class


//  *******************************************


//  declare variables
var grid_width, grid_height;
let num_columns = 11;
let num_rows = 2;
let margin = 20;  //  allows spacing around clouds in each month column
let max_num_particles = 100;


var my_hue;
var month_array = ["2008","2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
var new_array = ["201","234", "325", "248", "188", "607", "650", "558", "527", "865", "1518"];
var precipitation_array = [1.132,1.154,1.214,1.163,1.123,1.399,1.428,1.367,1.347,1.569,2];
//var precipitation_array = [1,1.083,1.166,1.249,1.332,1.415,1.498,1.581,1.664,1.747,1.83,1.913,2];
var high_point, low_point;
var min_temperature, max_temperature;
var min_precipitation, max_precipitation;

particles_array = [];
cloud_array = [];

var my_cloud;
var my_particles;



//  set up canvas
function setup() {
    createCanvas(windowWidth, windowHeight);
    smooth();

    background(255);
    textSize(8);

    // initialize variables
    grid_width = width / num_columns;
    grid_height = height / num_rows;



    min_precipitation = min(precipitation_array);
    max_precipitation = max(precipitation_array);

    particles_array = [max_num_particles];
    cloud_array = [num_columns];

    for (var i = 0; i < num_columns; i++) {
        cloud_array[i] = new Cloud(i);

    }  // end of for loop


    //noLoop();


}  // end of setup


//  draw objects on the screen
function draw() {
    background(0);

    //  colour is mapped to average high and low temperatures for the month (per column)
    for (var column = 0;  column < num_columns; column++) {


image(face,windowWidth/2,windowHeight/2, random(windowWidth-490,windowWidth-500), windowHeight - 400);

imageMode(CENTER)
            // noStroke();
            // rect(column * grid_width, 0, grid_width, grid_height);

    }  // end of for loop

    for (var column = 0;  column < num_columns; column++) {

//color fons
//  fill(0);
            // noStroke();
            // rect(column * grid_width, grid_height, grid_width, grid_height);

    }  // end of for loop


    //  display particles
    for (var i = 0; i < max_num_particles; i++) {

        for (var column = 0; column < num_columns; column++) {
            if (cloud_array[column].particles_array.length > i) {
                my_particles = cloud_array[column].particles_array[i];
                my_particles.updateParticles();
                my_particles.checkEdges();
                my_particles.displayParticles();
            }  // end of if

        }  // end of inner for loop

    }  // end of outer for loop


    //  display the clouds, needs to happen after initial display of particles
    for (var i = 0; i < 11; i++) {
        my_cloud = cloud_array[i];
        my_cloud.displayCloud();

			  // add labels to clouds
			  textSize(40);
        textAlign(CENTER);
        // fill(255);
        // stroke(255);
        //text(precipitation_array[i] + "X", my_cloud.pos_x, my_cloud.pos_y);
        fill(255,0,0);
        stroke(255,0,0);
        text(new_array[i], my_cloud.pos_x, my_cloud.pos_y);
    }  // end of for loop


    //  add title at top of screen
    textSize(25);
    textAlign(CENTER);
    fill(255);
    stroke(255);
    text("Número de desastres naturales al año que han resultado en el desplazamiento interno de personas.", width/2, 50);
    textSize(15);
    //stext("(Sed dignissim et ipsum vel eleifend.)", width/2, 80);

    //  add month labels near bottom of screen
    for (var i = 0; i < num_columns; i++) {
        textSize(20);
        textAlign(CENTER, CENTER);
        fill(255,0,0);
        stroke(255,0,0);
        text(month_array[i], i * grid_width + grid_width/2, height - 30);

    }  // end of for loop


}  // end of draw
