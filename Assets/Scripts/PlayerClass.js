/*
	Created by: Lech Szymanski
				lechszym@cs.otago.ac.nz
				Oct 18, 2014			
*/
#pragma strict

// Private variables (not visible in the Inspector panel)
// The speed of player movement
private var speed : float = 10;

// Per every frame... 
function Update () {
	// Player movement from input (it's a variable between -1 and 1) for
	// degree of left or right movement
	var movementInput : float = Input.GetAxis("Horizontal");
	// Move the player object
	transform.Translate( new Vector3(Time.deltaTime * speed * movementInput,0,0));
}


