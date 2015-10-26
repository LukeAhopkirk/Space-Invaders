```html
<h1>Lab 02 - Space Invaders</h1>

<h2>Goals</h2>
<div class="block">
<ul class="toplist">
	<li>To create this game in Unity2D:</li>

<div class="content">
	<!--
	<div id="unityPlayer">
		<div class="missing">
			<a href="http://unity3d.com/webplayer/" title="Unity Web Player. Install now!">
				<img alt="Unity Web Player. Install now!" src="http://webplayer.unity3d.com/installation/getunity.png" width="193" height="63" />
			</a>
		</div>
		<div class="broken">
			<a href="http://unity3d.com/webplayer/" title="Unity Web Player. Install now! Restart your browser after install.">
				<img alt="Unity Web Player. Install now! Restart your browser after install." src="http://webplayer.unity3d.com/installation/getunityrestart.png" width="193" height="63" />
			</a>
		</div>
	</div>
	-->
</div>

	<li>To learn about collisions.</li>
	<li>To learn how to keep the game state.</li>
	<li>To learn how to load different scenes.</li>
	<li>To get familiar with the game base for the first assignment.</li>

</ul>
</div>

<h2>Resources</h2>
<div class="block">
<ul class="toplist">
	<li><a href="Lab02.zip">Lab02.zip</a>.</li>
</ul>

<h2>Preparation</h2>
<ul class="toplist">	
	<li>Familiarise yourself with <a href="http://unity3d.com/learn/tutorials/modules/beginner/scripting">UnityScript syntax</a>.</li>
	<li>Read about the <a href="http://docs.unity3d.com/Manual/RigidbodiesOverview.html">rigid body</a> component.</li>
	<li>Read about <a href="http://docs.unity3d.com/Manual/CollidersOverview.html">colliders</a>.</li>
	
	<li>Watch the following video tutorials:
	<ul>
		<li><a href="http://unity3d.com/learn/tutorials/modules/beginner/2d/physics2d">2D Physics Overview</a></li>
		<li><a href="http://unity3d.com/learn/tutorials/modules/beginner/2d/rigidbody2d">Rigidbody 2D</a></li>
		<li><a href="http://unity3d.com/learn/tutorials/modules/beginner/2d/collider2d">Collider 2D</a></li>
	</ul>
</ul>
</div>

<h2>What to do</h2>

<div class="block">
This lab is a chance to see how a simple game can be implemented in Unity2D, to become more familiar with UnityScript, and to get a head start on the week’s assignment.
</div>

<h3>Create the main scene</h3>
<div class="block">
<ol class="toplist">
	<li>Grab <a href="Lab02.zip">Lab02.zip</a> and extract it into your <em>Labs</em> folder (it should create <em>Lab02/SpaceInvaders</em> subfolder)</li>
	<li>Start the Unity Editor.  From the main menu select <em>File | Open Project...</em>.</li>
	<li>Click the <em>Open Other</em> button and open <em>Lab02/SpaceInvaders</em> - it's a ready made Unity2D project.</li>
	
	<img class="block" src="images/screen01.png" style="max-width:1080px;max-height:827px" title="Unity2D SpaceInvaders pre-made project">

	<li>Notice that the <em>Assets</em> have been organised into a number of subfolders: <em>Prefabs</em>, <em>Scenes</em>, <em>Scripts</em>, <em>Sounds</em> and <em>Textures</em>.  It's a good idea to keep your assets organised - makes it easier to find things as the game content grows.  For this project, the sprites can be found in the <em>Textures</em> directory (all that we need for this game has already been imported).  Anything to do with audio resides in <em>Sounds</em> (imported already as well).  Scripts will go into <em>Scripts</em> (just one script there at the moment).  Scenes will be saved into <em>Scenes</em>, and prefabs (which we'll encounter soon enough) will get saved into <em>Prefabs</em>.  If later on you want to organise things in a different way, it's easy to create these subfolders either in the <em>Assets</em> window of the <strong>Project panel</strong> or in the <em>Assets</em> directory of your project.  For now let's leave things as they are.</li>  
	
	<div class="note">
	<img src="images/note.png" style="width:64px;max:64px">
	Once your assets are used in a scene, it's not a good idea to move them into different subfolders; the editor will not update the references from game objects to new locations.
	</div>

	<li>Let's create the scene for our game's single level.  From the main menu select <em>File | Save Scene</em>.  Name the scene "Level1" and save into the <em>Assets/Scenes</em> folder.</li>
	
	<li>The scene already contains the <em>Main Camera</em> object.  Let's add more objects.</li>
	
	<li>In the <strong>Hierarchy panel</strong> click on <em>Create | Create Empty </em>.  A new object, called <em>GameObject</em>, should appear.  The object is empty, aside from its <em>Transform</em> component (recall, every game object has a <em>Transform</em> component, which specifies its location in the scene).  Name the new object <em>Background</em> and set its <em>Transform | Position</em> to (0,0,0).</li>
	
	<li>Create another empty game object.  Name this one <em>Foreground</em> and set its <em>Transform | Position</em> to (0,0,-1).</li>
	
	<li>The two objects we have just created are going to function as parent object.  Unity allows you to order the game objects in a tree structure hierarchy, where objects can be parents or children of other objects.  The position of the child object is always relative to its parent.  Recall from the first lab, that the <em>Main Camera</em> (by default) is at position (0,0,-10) looking towards the positive direction of the Z-axis.  Therefore, from the camera's point of view, the "Foreground" object (at z=-1) comes before the <em>Background</em> object (at z=0).  Hence, the children of the <em>Foreground</em> object will be rendered in front of the children of the "Background".  From now, instead of keeping track of the Z-axis of every object, we can just make them a children of the <em>Background</em> or <em>Foreground</em> to get a desired rendering order.</li>
 
	<li>Now create a new <em>2D Object/Sprite</em> object.  Name it <em>Background</em>.  Set its <em>Sprite Renderer | Sprite</em> property to the "background" image.  Set the <em>Transform</em> properties as follows: <em>Position</em> to (0,0,0) and <em>Scale</em> to (2,2,1).  In the <strong>Hierarchy panel</strong> drag the newly created <em>Background</em> sprite object under the existing <em>Background</em> game object.  Yes, game objects can have duplicate names - whether you think it's a good idea to take advantage of that feature or not, is up to you.</li>
	
	<li>Create another sprite game object.  Name it <em>Player</em>.  Set its <em>Sprite</em> to "rocketship", <em>Position</em> to (0,-4,0) and <em>Scale</em> to (1.6,1.6,1).  In the <strong>Hierarchy panel</strong> drag the <em>Player</em> game object under the <em>Foreground</em> object.</li>
 
	<li>Add a <em>Script | PlayerClass</em> component to the <em>Player</em> game object.</li>

	<li>Save the scene.  At this point your project should look like the screenshot below:</li>
	
	<img class="block" src="images/screen02.png" style="max-width:1068px;max-height:825px" title="Scene for Level 1">

	<p>When you press the play button, you should be able to move the player left and right with the arrow keys.</p>
	
	<li>Let's examine the script that makes the player object move.  In the <strong>Assets</strong> select <em>Scripts/PlayerClass</em> and double-click to open it in MonoDevelop.</li>


	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/01/PlayerClass.js">PlayerClass.js</a></div>
	<pre><span class="codehash">#pragma strict</span>

<span class="codecomment">// Private variables (not visible in the Inspector panel)</span>
<span class="codecomment">// The speed of player movement</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> speed : <span class="codeclass">float</span> = <span class="codenumber">10</span>;

<span class="codecomment">// Per every frame... </span>
<span class="codekeyword">function</span> Update () {
   <span class="codecomment">// Player movement from input (it's a variable between -1 and 1) for</span>
   <span class="codecomment">// degree of left or right movement</span>
   <span class="codeclass">var</span> movementInput : <span class="codeclass">float</span> = <span class="codeclass">Input</span>.GetAxis(<span class="codestring">"Horizontal"</span>);
   <span class="codecomment">// Move the player object</span>
   transform.Translate( <span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(<span class="codeclass">Time</span>.deltaTime * speed * movementInput,<span class="codenumber">0</span>,<span class="codenumber">0</span>));
}</pre>	</div>

	<p>
	User input is detected in the call GetAxis() method of the <span class="codeclass"><a href="http://docs.unity3d.com/ScriptReference/Input.GetAxis.html">Input</a></span> class.  It's a convenience method provided by Unity, which detects user input based on a set of pre-defined keyboard/controller keys.  For instance, at the moment, the player can be controller by left and right arrow or by the 'a' and 'd' keys.  
	</p>

	<div class="note">
	<img src="images/note.png" style="width:64px;max:64px">
	To view/change the keyboard/controller settings associated with <span class="codeclass">Input</span>.GetAxis() method, from the main menu select <em>Edit | Project Settings | Input</em>.  The properties of the <em>Input Manager</em> should appear in the <strong>Inspector Panel</strong> where you can view (or change) the current settings for <em>Axes</em>. 
	</div>


	<p>
	The GetAxis() function returns a value between -1 and 1, signifying the direction of the movement to the left or right.  This value is stored in the <tt>movementInput</tt> variable.  To compute the translation of the <em>Player</em> game object a shift vector is created with its X coordinate equal to: the time since the last Update() times the <tt>speed</tt> constant times the <tt>movementInput</tt> (for direction).  The Y and Z coordinates are zero.  Passing this vector to the <em>Translate()</em> method of the game object, referenced by the <tt>transform</tt> variable, shifts that object by the specified vector.  
	</p>


	<li>The <strong>Hierarchy panel</strong> gives you a good overview of the object hierarchy in the scene.  Here's a diagram of that hierarchy with few more details (to help you understand how the current scene is built):
	
	<img class="block" src="images/hierarchy01.png" style="max-width:771px;max-height:639px" title="Game object tree">
	</li>
</ol>
</div>

<h3>Create an alien wave</h3>

<div class="block">
Time to create aliens.
<ol class="toplist">

	<li>Create a new <em>2D Object | Sprite</em> in the  <strong>Hierarchy panel</strong>.  Name it <em>Alien</em>.  Set its <em>Sprite</em> property to "planet", <em>Position</em> to (-3,2,0), and <em>Scale</em> to (1.5,1.5,0).</li>

	<img class="block" src="images/screen03.png" style="max-width:1068px;max-height:825px" title="Alien sprite object">

	<li>One way to get the <em>Alien</em> to move is to write a script for it.  Then duplicates could be made and positioned in different parts of the scene.  But that's a lot of manual labour.  Besides, we want the aliens to move as a wave, so it will be easier to have one script control all of the <em>Alien</em>s at once.  That script will also spawn a bunch of <em>Alien</em> game objects and put them in a formation. 
	</li>
	
	<li>In order to spawn a game objects from a script a prefab of that object needs to be made.  Prefab> is kind of a template for a game object.  All it takes to create one is to drag the desired game object from the <em>Hierarchy panel</em> to the <strong>Assets panel</strong> - Unity will create an asset which is a prefab for that game object.  Go ahead, drag the <em>Alien</em> game object from the <strong>Hierarchy panel</strong> to the <em>Prefabs</em> subdirectory in <strong>Assets</strong>.  You should have your prefab.  When click on it, you should see its properties (same as for the game object) in the <strong>Inspector panel</strong>.</li>

	<img class="block" src="images/screen04.png" style="max-width:1068px;max-height:825px" title="Alien prefab object">

	<div class="note">
	<img src="images/note.png" style="width:64px;max:64px">
	It is the act of dragging a game object to the <strong>Assets panel</strong> that creates a prefab - it does not matter whether you are dragging it into a <em>Prefabs</em> folder or not. 
	</div>


	<li>Once the prefab is made, you can delete the <em>Alien</em> game object from the <strong>Hierarchy panel</strong> (right-click and <em>Delete</em>).  The prefab in <em>Assets</em> should remain unaffected.</li>  

	<li>In <em>Assets | Scripts</em> create a new script (right-click and select <em>Create | Javascript</em>.  Name the new script <em>EnemyWaveClass</em>.  Double-click it to open in MonoDevelop and paste in the following code:</li>  	
	
	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/01/EnemyWaveClass.js">EnemyWaveClass.js</a></div>
	<pre><span class="codehash">#pragma strict</span>

<span class="codecomment">// Variable poitning to object prefab</span>
<span class="codeclass">var</span> alienPrefab : Transform;

<span class="codekeyword">function</span> Start () {
   <span class="codeclass">var</span> gapBetweenAliens : <span class="codeclass">float</span> = <span class="codenumber">1.5</span>f;
   
   for(<span class="codeclass">var</span> y : int = <span class="codenumber">0</span>; y < <span class="codenumber">4</span>; y++) {
      <span class="codecomment">// Horizontal offset for every other row</span>
      <span class="codeclass">var</span> offsetX : <span class="codeclass">float</span> = ((y % <span class="codenumber">2</span> == <span class="codenumber">0</span>) ? <span class="codenumber">0.0</span>f : <span class="codenumber">0.5</span>f) * gapBetweenAliens;
      for(<span class="codeclass">var</span> x : int = -<span class="codenumber">3</span>; x < <span class="codenumber">3</span>; ++x) {
         <span class="codecomment">// Create new game object (from the prefab)</span>
         <span class="codeclass">var</span> alien = Instantiate(alienPrefab);
         alien.parent = transform;
         <span class="codecomment">// Position the newly created object in the wave</span>
         alien.position = <span class="codekeyword">new</span> <span class="codeclass">Vector3</span>((x*gapBetweenAliens)+ offsetX, <span class="codenumber">0</span> + (y * gapBetweenAliens),<span class="codenumber">0</span>);         
      }
   
   }
}</pre>	</div>

	<p>The Start() methods is invoked by the game engine when the game object is instantiated in the scene.  Since we're going to create the wave of aliens only once at scene load, that's where the code for spawning of the aliens goes.  The two loops inside the function are there to compute the X and Y position of the next alien in the wave - the odd and even rows are offset a bit, assuring there's a gap between the aliens.</p>
	
	<p>The call to the <a href="http://docs.unity3d.com/ScriptReference/Object.Instantiate.html">Instantiate()</a> clones an object whose <em>Transform</em> is passed in as the argument.  Passing the Transform of a prefab will create an object based on that prefab.  The <tt>alienPrefab</tt> variable, which gets passed in to the <em>Instantiate()</em> method, is a public variable, and so we'll be able to link it to the <em>Alien</em> prefab later on (in the <strong>Inspector panel</strong>).  Instantiate() function returns a reference to the newly created object, which is stored in the <em>alien</em> variable.  The next line places the newly created object in a hierarchy so that the object with the <em>EnemyWaveClass</em> component becomes its parent.  Next, the new object is positioned in the scene based on X and Y coordinates computed with the offsets from the two for loops.</p>  
	
	<li>Back to the Unity editor.  Create another empty game object.  Name it <em>EnemyWave</em> and drag it under the <em>Foreground</em> game object.</li>

	<li>Add <em>EnemyWaveClass</em> script as a component of <em>EnemyWave</em>.  Note the <em>Alien Prefab</em> attribute that appears along with the new script component.  Drag the <em>Alien</em> prefab from the <em>Assets</em> over the <em>Alien Prefab</em> attribute of <em>EnemyWaveClass</em> component.  The variable now points to the prefab.</li>

	<img class="block" src="images/screen05.png" style="max-width:1068px;max-height:825px" title="EnemyWave game object">

	<li>Run the game.  You should see something like this:</li>
	

	<video class="blocks" width="640" height="480" controls> <!--autoplay="autoplay" loop>-->
	  	<source src="videos/lab02vid02.mp4" type="video/mp4">
  		<source src="videos/lab02vid02.webm" type="video/webm">
		Your browser does not support the video tag.
	</video> 
	
	<p>
	If you start the game with the <em>EnemyWave</em> game object selected in the <strong>Hierarchy panel</strong> you'll get to see all the newly created children objects underneath (as shown in the video above).

	<li>Let's review the game object tree.  You have now the <em>EnemyWave</em> object under <em>Foreground</em>, which is a parent of many <em>Alien</em> game objects - the dashed border around <em>Alien</em> objects in the diagram below indicates that they are loaded at run time.</li> 

	<img class="block" src="images/hierarchy02.png" style="max-width:1198px;max-height:1821px" title="Game object tree">


</ol>
</div>

<h3>Moving the alien wave</h3>

<div class="block">
To move the wave, you are going to move the <em>EnemyWave</em> object.  All its children (<em>Alien</em>s) will move along.

<ol class="toplist">

	<li>Update the <em>EnemyWaveClass</em> script as shown below (entire script is shown, but the old code is made semitransparent, so the new code, and its location with respect to the old code, should be easy to see):</li>

	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/02/EnemyWaveClass.js">EnemyWaveClass.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

<span class="codecomment">// Variable poitning to object prefab</span>
<span class="codeclass">var</span> alienPrefab : Transform;

</div><span class="codecomment">// Speed of the wave movement</span>
<span class="codeclass">var</span> speed : <span class="codeclass">float</span>;

<span class="codecomment">// Direction of the wave movement (-ve means left, +ve is right)</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> direction: int=-<span class="codenumber">1</span>;

<div class="oldcode"><span class="codekeyword">function</span> Start () {
   <span class="codeclass">var</span> gapBetweenAliens : <span class="codeclass">float</span> = <span class="codenumber">1.5</span>f;
   
   for(<span class="codeclass">var</span> y : int = <span class="codenumber">0</span>; y < <span class="codenumber">4</span>; y++) {
      <span class="codecomment">// Horizontal offset for every other row</span>
      <span class="codeclass">var</span> offsetX : <span class="codeclass">float</span> = ((y % <span class="codenumber">2</span> == <span class="codenumber">0</span>) ? <span class="codenumber">0.0</span>f : <span class="codenumber">0.5</span>f) * gapBetweenAliens;
      for(<span class="codeclass">var</span> x : int = -<span class="codenumber">3</span>; x < <span class="codenumber">3</span>; ++x) {
         <span class="codecomment">// Create new game object (from the prefab)</span>
         <span class="codeclass">var</span> alien = Instantiate(alienPrefab);
         alien.parent = transform;
         <span class="codecomment">// Position the newly created object in the wave</span>
         alien.position = <span class="codekeyword">new</span> <span class="codeclass">Vector3</span>((x*gapBetweenAliens)+ offsetX, <span class="codenumber">0</span> + (y * gapBetweenAliens),<span class="codenumber">0</span>);         
      }
   
   }
}

</div><span class="codecomment">// Per each frame...</span>
<span class="codekeyword">function</span> Update () {
   <span class="codecomment">// Move the wave on the horisonatal axis</span>
   transform.Translate( <span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(<span class="codeclass">Time</span>.deltaTime * direction * speed,<span class="codenumber">0</span>,<span class="codenumber">0</span>));
}</pre>	</div>

	<p>
	Two variables have been added: <tt>speed</tt>, which controls the speed of the wave movement, and a private variable indicating the direction of the movement.  At scene start the wave will move to the left.  In the <em>Update()</em> method the game object (<em>EnemyWave</em>) gets translated.  The computation for the translation is identical to that for movement of the <em>Player</em> game object, except the direction is not controlled by user input.  
	</p>

	<li>Select <em>EnemyWave</em> and set its <em>EnemyWaveClass | Speed</em> attribute to 2.<li>
	
	<li>When you play the game, the wave should move to the left.</li>

	<video class="blocks" width="640" height="480" controls> <!--autoplay="autoplay" loop>-->
	  	<source src="videos/lab02vid03.mp4" type="video/mp4">
  		<source src="videos/lab02vid03.webm" type="video/webm">
		Your browser does not support the video tag.
	</video> 


</ol>
</div>

<h3>Your first collision</h3>
<div class="block">
Right now the wave will continue moving in one direction and disappear off the screen, as will the <em>Player</em> object (if so directed by the user).  To stop those objects from going off screen, you'll need to set up barriers on either side and use the collision system to keep the objects in bounds.
	
<ol class="toplist">

	<li>Create an empty game object.  Name it <em>LeftWall</em>.  Make sure its <em>Position</em> is (0,0,0).  Add a <em>Physics 2D | Edge Collider 2D</em> component.</li>

	<li>In the <strong>Hierarchy panel</strong> right-click the <em>LeftWall</em> object and <em>Duplicate</em>.  Name the new object <em>RightWall</em>.</li>

	<li>Next, you're going to create two tags, which will be used to label the two objects you just created.  A tag is a string that can be attached to a game object.  Tags are useful for identification (you'll see an example of this shortly).  From the main menu select <em>Edit | Project Settings | Tags and Layers</em>.  In the <strong>Inspector panel</strong> expand <em>Tags</em> and add two new entries "LeftWall" and "RightWall".   

	<img class="block" src="images/screen15.png" style="max-width:1071px;max-height:810px" title="">

	<li>Select <em>LeftWall</em> game object and click on the <em>Tag</em> drop-down in the <strong>Inspector panel</strong> - the newly created tags should be listed as one of the options (the other options are a set of built-in tags).  Select "LeftWall".</li>
	
	<img class="block" src="images/screen16.png" style="max-width:1071px;max-height:810px" title="">
	
	<li>Do the same thing for the <em>RightWall</em> game object, expect tag it with the "RightWall" label instead.  The two walls have been tagged with different string labels.  These will be useful when you need to figure out which wall an <em>Alien</em> or the <em>Player</em> bumped into.</li>

	<li>The wall objects need to be positioned on the left and right-hand side of the screen.  It's possible to do this by hand (manipulating those object in Unity editor), but doing it programmatically makes it more precise and adaptable to changes in screen size.  Remember, Unity can compile games into different platforms, and so taking into account the possibility of slight variations, such as screen size/aspect ratio, is a good idea.</li>
	
	<li>Create a new Javascript in <em>Assets | Scripts</em>.  Name it <em>LevelMaster</em>.  Double-click it to open in MonoDevelop and paste in the following code:</li>

	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/02/LevelMaster.js">LevelMaster.js</a></div>
	<pre><span class="codehash">#pragma strict</span>

<span class="codecomment">// Variables referencing two edge colliders</span>
<span class="codeclass">var</span> leftWall: EdgeCollider2D;
<span class="codeclass">var</span> rightWall: EdgeCollider2D;

<span class="codecomment">// When creating the object...</span>
<span class="codekeyword">function</span> Start () {

   <span class="codecomment">// Get the width and height of the camera (in pixels)</span>
   <span class="codeclass">var</span> screenW : <span class="codeclass">float</span> = <span class="codeclass">Camera</span>.main.pixelWidth;
   <span class="codeclass">var</span> screenH : <span class="codeclass">float</span> = <span class="codeclass">Camera</span>.main.pixelHeight;

   <span class="codecomment">// Create an array consisting of two Vector2 object</span>
   <span class="codeclass">var</span> edgePoints: Vector2[] = <span class="codekeyword">new</span> Vector2[<span class="codenumber">2</span>];
   
   <span class="codecomment">// Convert screen coordinates point (0,0) to world coordinates</span>
   <span class="codeclass">var</span> leftBottom : <span class="codeclass">Vector3</span> = <span class="codeclass">Camera</span>.main.ScreenToWorldPoint(<span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(<span class="codenumber">0f</span>, <span class="codenumber">0f</span>, <span class="codenumber">0f</span>));      
   <span class="codecomment">// Convert screen coordinates point (0,H) to world coordinates</span>
   <span class="codeclass">var</span> leftTop : <span class="codeclass">Vector3</span> = <span class="codeclass">Camera</span>.main.ScreenToWorldPoint(<span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(<span class="codenumber">0f</span>, screenH, <span class="codenumber">0f</span>));      
            
   <span class="codecomment">// Set the two points in the array to screen left bottom</span>
   <span class="codecomment">// and screen left top points            </span>
   edgePoints[<span class="codenumber">0</span>] = leftBottom;
   edgePoints[<span class="codenumber">1</span>] = leftTop;
   
   <span class="codecomment">// Position the left wall edge collider</span>
   <span class="codecomment">// at the left edge of the camera</span>
   leftWall.points = edgePoints;

   <span class="codecomment">// Convert screen coordinates point (W,0) to world coordinates</span>
   <span class="codeclass">var</span> rightBottom : <span class="codeclass">Vector3</span> = <span class="codeclass">Camera</span>.main.ScreenToWorldPoint(<span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(screenW, <span class="codenumber">0f</span>, <span class="codenumber">0f</span>));      
   <span class="codecomment">// Convert screen coordinates point (W,H) to world coordinates</span>
   <span class="codeclass">var</span> rightTop : <span class="codeclass">Vector3</span> = <span class="codeclass">Camera</span>.main.ScreenToWorldPoint(<span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(screenW, screenH, <span class="codenumber">0f</span>));      

   <span class="codecomment">// Set the two points in the array to screen right bottom</span>
   <span class="codecomment">// and screen right top points            </span>
   edgePoints[<span class="codenumber">0</span>] = rightBottom;
   edgePoints[<span class="codenumber">1</span>] = rightTop;

   <span class="codecomment">// Position the left wall edge collider</span>
   <span class="codecomment">// at the left edge of the camera</span>
   rightWall.points = edgePoints;
}</pre>	</div>

	<p>
	This script actually positions the edge colliders, not the objects themselves - four our purposes that's sufficient.  The <tt>leftWall</tt> and <tt>rightWall</tt> variables refer to those edge colliders (you'll connect the right objects to those references in Unity Editor in a bit).  The position of an edge collider is configured by specifying the points that it passes through.  Since for this game, these colliders are straight lines, the location of each is defined by only two points.  The problem is that information about the screen size comes in screen coordinates (in pixels), while those points for the edge collider must be defined in world coordinates (in world "units").
	</p>
	
	<img class="block" src="images/screen06.png" style="max-width:1068px;max-height:825px" title="Screen coordinates">

	<p>The above screenshot shows the four corners of the screen view in screen coordinates.  The value for "screenW" and "screenH" can be found from the <tt>Camera.main</tt> object (which reffers to the main camera that is showing the game view), the Z coordinate is going to be set to zero.</p>
	
	<p>The conversion from screen coordinates to world coordinates is done with the call to the <a href="http://docs.unity3d.com/ScriptReference/Camera.ScreenToWorldPoint.html"><em>ScreenToWorldPoint()</em></a> method of the <a href="http://docs.unity3d.com/ScriptReference/Camera.html">Camera.main</a> object.  Camera keeps track of its own location in the world, so it is able to provide a function that can translate screen coordinates to world coordinates.  In the script above, the world coordinates for the four corners of the screen are stored in the <tt>leftBottom</tt>, <tt>leftTop</tt>, <tt>rightBottom</tt> and <tt>rightTop</tt> variables.	
	
	<p>The <tt>edgePoints</tt> variable is an array of 2D vectors - it holds the points that define the position of the edge collider.  Position of a 2D edge collider is specified without Z-axis co-ordinate.  For <tt>leftWall</tt> the array points are set to <tt>leftBottom</tt> and <tt>leftTop</tt> vectors.  Did you notice the assignment of a 3D vector to a 2D vector?  It would seem that Unity has no problem with that (just drops the Z coordinate).  Next, the <tt>leftWall</tt> collider is positioned by setting its <tt>position</tt> property equal to <tt>edgePoints</tt> array.  The same thing is done for the <tt>rightWall</tt> collider, except the two points in the <tt>edgePoints</tt> array are set to <tt>rightBottom</tt> and <tt>rightTop</tt> points respectively.</p>

	<li>Back to the Unity Editor.  Create an empty game object.  Name it <em>LevelMaster</em>, and add <em>LevelMaster</em> script component.  Drag the <em>LeftWall</em> and <em>RightWall</em> game objects over the <em>Left Wall</em> and <em>Right Wall</em> attributes of the new component.  The two script variables now point to edge 2D colliders.</li>

	<img class="block" src="images/screen07.png" style="max-width:1068px;max-height:825px" title="Screen coordinates">

	<li>Video below shows the location of the two colliders when the game is played.  To see it for yourself, enter the play mode, and switch to <em>Scene view</em>.  Ctrl-click the  <em>LeftWall</em> and <em>RightWall</em> objects in the <strong>Hierarchy panel</strong> to see the outline of their colliders in the view.  You might notice that the colliders are not positioned at the edges of the background sprite - that's because the camera view does not encompass the entire background.  The walls should outline exactly the left and right edges of the camera.</li>

	<video class="blocks" width="640" height="480" controls> <!--autoplay="autoplay" loop>-->
	  	<source src="videos/lab02vid04.mp4" type="video/mp4">
  		<source src="videos/lab02vid04.webm" type="video/webm">
		Your browser does not support the video tag.
	</video> 

	<li>The edge colliders are in position.  Now let's modify the <em>Alien</em> prefab, so that the spawned <em>Aliens</em> collide with those edges.</li>
	
	<li>Select the <em>Alien</em> prefab from <em>Assets | Prefabs</em>.  Add a <em>Physics 2D |Rigidbody 2D</em> component.  <a href="http://docs.unity3d.com/ScriptReference/Rigidbody.html">Rigidbody</a> component makes the game object subject to the rules of the physics engine.  Try to play the game now.  What happens to the aliens?  They drop under gravity.  That's because by default rigid bodies come with a mass and are subject to gravity.  To stop the alines from falling down set the <em>Gravity Scale</em> attribute of the <em>Rigidbody 2D</em> component to 0.  While you're at it enable the <em>Fixed Angle</em> setting - it lets the engine know that the game object is not undergoing any rotations (which simplifies the interactions with the physics game engine).</li>
	
	<li>Add a <em>Physic 2D | Circle Collider 2D</em> component to the <em>Alien</em>.  The collider is actually a circle that is superimposed over the game object.  You can't see it now, because prefab is not shown in the scene.  The easiest thing to do at this point is to drag the <em>Alien</em> prefab from the to <em>Scene view</em>, thus create an <em>Alien</em> game object in the scene.  Do you see a green circle around the sprite?  That's the collider.  It's a bit too big, so you need to shrink it to match closely the outline of the sprite.  In the <strong>Inspector panel</strong> under the <em>Circle Collider 2D</em> component find the <em>Edit Collider</em> button and click it.  Now you can resize that circle.  You can also resize it by setting its <em>Radius</em> property (the value of 0.28 work for me).</li>
	
	<li>Changing the properties of a game object in the scene does not automatically update the prefab from which the object was created.  To update the prefab click on <em>Apply</em> button near the top of the <strong>Inspector panel</strong> when the <em>Alien</em> game object is selected.  You can delete the <em>Alien</em> game object from the scene - the prefab will remember all the updates.   

	<li>Hit the play button.  What happens?  Do individual <em>Alien</em>s collide with the wall and then with each other?  That means the colliders work, but not quite how we want them to work.  It would be better, if an event was triggered on a collision, so that we could change the direction of the entire wave.</li>
	
	<li>Select the <em>LeftWall</em> game object and enable its <em>Edge Collider 2D | Is Trigger</em> attribute.  Do the same for the <em>RightWall</em> game object.</li>
	
	<li>Play the game.  Now the <em>Alien</em>s pass through the wall.  Trigger colliders do not prevent collisions, but they will send notifications when collisions occur if we implement appropriate method(s) in the script component of on of the colliding objets.</li>
	
	<li>Before we continue with collisions, let's add two methods to the "EnemyWaveClass" script, which will allow setting of the direction of the wave</li>
	
	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/02/EnemyWaveClass.js">EnemyWaveClass.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

<span class="codecomment">// Variable poitning to object prefab</span>
<span class="codeclass">var</span> alienPrefab : Transform;

<span class="codecomment">// Speed of the wave movement</span>
<span class="codeclass">var</span> speed : <span class="codeclass">float</span>;

<span class="codecomment">// Direction of the wave movement (-ve means left, +ve is right)</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> direction: int=-<span class="codenumber">1</span>;

<span class="codekeyword">function</span> Start () {
   <span class="codeclass">var</span> gapBetweenAliens : <span class="codeclass">float</span> = <span class="codenumber">1.5</span>f;
   
   for(<span class="codeclass">var</span> y : int = <span class="codenumber">0</span>; y < <span class="codenumber">4</span>; y++) {
      <span class="codecomment">// Horizontal offset for every other row</span>
      <span class="codeclass">var</span> offsetX : <span class="codeclass">float</span> = ((y % <span class="codenumber">2</span> == <span class="codenumber">0</span>) ? <span class="codenumber">0.0</span>f : <span class="codenumber">0.5</span>f) * gapBetweenAliens;
      for(<span class="codeclass">var</span> x : int = -<span class="codenumber">3</span>; x < <span class="codenumber">3</span>; ++x) {
         <span class="codecomment">// Create new game object (from the prefab)</span>
         <span class="codeclass">var</span> alien = Instantiate(alienPrefab);
         alien.parent = transform;
         <span class="codecomment">// Position the newly created object in the wave</span>
         alien.position = <span class="codekeyword">new</span> <span class="codeclass">Vector3</span>((x*gapBetweenAliens)+ offsetX, <span class="codenumber">0</span> + (y * gapBetweenAliens),<span class="codenumber">0</span>);         
      }
   
   }
}

<span class="codecomment">// Per each frame...</span>
<span class="codekeyword">function</span> Update () {
   <span class="codecomment">// Move the wave on the horisonatal axis</span>
   transform.Translate( <span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(<span class="codeclass">Time</span>.deltaTime * direction * speed,<span class="codenumber">0</span>,<span class="codenumber">0</span>));
}

</div><span class="codecomment">// Method for changing wave direction (to be invoked</span>
<span class="codecomment">// from a collider)</span>
<span class="codekeyword">function</span> SetDirectionLeft() {
   <span class="codecomment">// Check if the current direction is to the right</span>
   <span class="codekeyword">if</span>(direction == <span class="codenumber">1</span>) {
      <span class="codecomment">// Changing the direction</span>
      <span class="codecomment">// push the wave down a bit as well</span>
      direction = -<span class="codenumber">1</span>;   
      transform.Translate(<span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(<span class="codenumber">0</span>,-<span class="codenumber">0.5</span>f,<span class="codenumber">0</span>));
   }
}

<span class="codecomment">// Method for changing wave direction (to be invoked</span>
<span class="codecomment">// from a collider)</span>
<span class="codekeyword">function</span> SetDirectionRight() {
   <span class="codecomment">// Check if the current direction is to the left</span>
   <span class="codekeyword">if</span>(direction == -<span class="codenumber">1</span>) {
      <span class="codecomment">// Changing the direction</span>
      <span class="codecomment">// push the wave down a bit as well</span>
      direction = <span class="codenumber">1</span>;   
      transform.Translate(<span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(<span class="codenumber">0</span>,-<span class="codenumber">0.5</span>f,<span class="codenumber">0</span>));
   }
}</pre>	</div>
	
	<p>
	In each of the new methods, a check is made whether the new direction setting is different to the one that the wave is moving in at the moment.  If the wave is already moving to the left, and the function is called attempting to change direction to the left, nothing is going to happen.  This accounts for the possibility of a number of aliens bumping into the wall all at the same time, in which case, we still want the wave to change direction only once.  When direction is change the transform (which references the Transform of the <em>EnemyWave</em> game object) is pushed down by a bit.  This will move the entire wave down on direction change.
	</p>
	
	<li>Back to collisions.  When two colliders touch, and one of them is a trigger, the engine checks if the involved game objects implement the <a href="http://docs.unity3d.com/ScriptReference/MonoBehaviour.OnTriggerEnter2D.html"><em>OnTriggerEnter2D()</em></a> method in one of their script components.  If yes, the method will be invoked on collision.  Let's create a script for the <em>Alien</em> and implement the <em>OnTriggerEnter2D()</em> method.</li>
	
	<li>Create a new Javascript in <em>Assets | Scripts</em>.  Name it <em>AlienClass</em>.  Double-click to open it in MonoDevelop, and paste in the following code:
	
	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/03/AlienClass.js">AlienClass.js</a></div>
	<pre><span class="codehash">#pragma strict</span>

<span class="codecomment">//Point the alien is worth</span>
<span class="codeclass">var</span> points: int = <span class="codenumber">100</span>;

<span class="codecomment">// When enemy collides with an object with a</span>
<span class="codecomment">// collider that is a trigger...</span>
<span class="codekeyword">function</span> OnTriggerEnter2D(other : Collider2D) {
   <span class="codeclass">var</span> enemyWave : EnemyWaveClass;

   <span class="codecomment">// Check if colliding with the left or right wall</span>
   <span class="codecomment">// (by checking the tags of the collider that the enemy</span>
   <span class="codecomment">//  collided with)</span>
   <span class="codekeyword">if</span>(other.tag == <span class="codestring">"LeftWall"</span>) {
      <span class="codecomment">// If collided with the left wall, get a reference</span>
      <span class="codecomment">// to the EnemyWave object, which should be a component</span>
      <span class="codecomment">// of enemies parent</span>
      enemyWave = transform.parent.GetComponent(EnemyWaveClass);
      <span class="codecomment">// Set direction of the wave</span>
      enemyWave.SetDirectionRight();
   } <span class="codekeyword">else</span> <span class="codekeyword">if</span>(other.tag == <span class="codestring">"RightWall"</span>) {
      <span class="codecomment">// If collided with the right wall, get a reference</span>
      <span class="codecomment">// to the EnemyWave object, which should be a component</span>
      <span class="codecomment">// of enemies parent</span>
      enemyWave = transform.parent.GetComponent(EnemyWaveClass);
      <span class="codecomment">// Set direction of the wave</span>
      enemyWave.SetDirectionLeft();
   }             
}</pre>	</div>	

	<p>The <tt>other</tt> parameter, that is passed in to the <em>OnTriggerEnter2D()</em> method is a reference to the collider of the other object (involved in the collision).  The script relies on tags to determine which wall the <tt>other</tt> reference corresponds to.  Remember how you tagged the two walls?  If the <tt>other</tt> object is the <em>LeftWall</em>'s collider, the wave direction will be set to move to the right.  If the <tt>other</tt> object is the <em>RightWall</em>'s collider, the wave direction will be set to move to the left.  In order to get a reference to the <em>EnemyWaveClass</em> object, which implements the <em>SetDirectionRight()</em> and <em>SetDirectionLeft()</em> methods, the script follows the object hierarchy - from <tt>transform</tt> of the current (<em>Alien</em>) object to its parent's (<em>EnemyWave</em>'s), component of type <em>EnemyWaveClass</em></p>
	
	<li>Back in Unity Editor.  Add the <em>AlienClass</em> script component to the <em>Alien</em> prefab.   

	<li>Play the game, the wave should now go back and forth, moving down after each collision with the wall:</li>
			
	<video class="blocks" width="640" height="480" controls> <!--autoplay="autoplay" loop>-->
	  	<source src="videos/lab02vid05.mp4" type="video/mp4">
  		<source src="videos/lab02vid05.webm" type="video/webm">
		Your browser does not support the video tag.
	</video> 
	
	<div class="infobox">
	<div class="infoboxtitle">About Colliders</div>
	<p>
	A collider is a geometric shape superimposed over the game object.  Game engine moves these shapes with the game object and regularly performs computation to check if any of the shapes overlap.  Depending on the type of the game object, or the look of the sprite, different shape will work best; hence Unity provides a choice of <a href="http://docs.unity3d.com/Manual/class-CircleCollider2D.html">circle</a>, <a href=http://docs.unity3d.com/Manual/class-BoxCollider2D.html>box</a> (which is a rectangle), or <a href="http://docs.unity3d.com/Manual/class-EdgeCollider2D.html">edge</a> colliders.  
	</p>

	<p>
	<a href=http://docs.unity3d.com/ScriptReference/Collider2D.html">2D colliders</a> operate in the XY plane - the Z-axis of the game object is not taken into account when detecting collisions.  That means that in 2D physics things will collide even if they're at different depth from camera.  It is still possible to assign objects to different layers and disable collisions between given layers.  
	</p>

	<p>
	In Unity, in order to get two game objects to collide, they both need to have a collider component, and at least one of them needs to be a rigid body.  Depending on the methods implemented in the scripts of the colliding objects, the engine can send messages when the objects Enter, Exit or Stay in collision state.  When one of the colliders is a trigger, messages are sent to the <em>OnTrigger</em> methods, otherwise messages are sent to the <em>OnCollision</em> methods.
	</p>
	</div>
</ol>
</div>


<h3>Keep the player within the bounds</h3>
<div class="block">
Let's set up collisions between the walls and the <em>Player</em> game object, so that the player can't venture off the screen.

<ol class="toplist">

	<li>Add the <em>Rigidbody 2D | Box Collider 2D</em> component to the <em>Player</em> game object.  You can edit the collider to adjust its size to fit the sprite (my setting was was X=0.85 and Y=0.6).  Don't forget to set <em>Gravity Scale</em> to 0 and enable the <em>Fixed Angle</em> flag.</li>
	
	
	<li>Now, to detect collisions and prevent the player passing through the walls, add the following code to the <em>PlayerClass</em> script:</li>
	
	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/03/PlayerClass.js">PlayerClass.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

<span class="codecomment">// Private variables (not visible in the Inspector panel)</span>
<span class="codecomment">// The speed of player movement</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> speed : <span class="codeclass">float</span> = <span class="codenumber">10</span>;

</div><span class="codecomment">// Flag indicating whether the player is at the </span>
<span class="codecomment">// left edge of the screen</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> atLeftWall: <span class="codeclass">boolean</span> = <span class="codeclass">false</span>;

<span class="codecomment">// Flag indicating whether the player is at the </span>
<span class="codecomment">// right edge of the screen</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> atRightWall: <span class="codeclass">boolean</span> = <span class="codeclass">false</span>;

<span class="codecomment">// On collision with a trigger collider...</span>
<span class="codekeyword">function</span> OnTriggerEnter2D(other : Collider2D) {
   <span class="codecomment">// Check the tag of the object the player</span>
   <span class="codecomment">// has collided with</span>
   <span class="codekeyword">if</span>(other.tag == <span class="codestring">"LeftWall"</span>) {
      <span class="codecomment">// If collided with the left wall, set</span>
      <span class="codecomment">// the left wall flag to true</span>
      atLeftWall = <span class="codeclass">true</span>;
   } <span class="codekeyword">else</span> <span class="codekeyword">if</span>(other.tag == <span class="codestring">"RightWall"</span>) {
      <span class="codecomment">// If collided with the right wall, set</span>
      <span class="codecomment">// the right wall flag to true</span>
      atRightWall = <span class="codeclass">true</span>;
   }           
}

<span class="codecomment">// When no longer colliding with an object...</span>
<span class="codekeyword">function</span> OnTriggerExit2D(other : Collider2D) {
   <span class="codecomment">// Check the tag of the object the player</span>
   <span class="codecomment">// has ceased to collide with</span>
   <span class="codekeyword">if</span>(other.tag == <span class="codestring">"LeftWall"</span>) {
      <span class="codecomment">// If collided with the left wall, set</span>
      <span class="codecomment">// the left wall flag to true</span>
      atLeftWall = <span class="codeclass">false</span>;
   } <span class="codekeyword">else</span> <span class="codekeyword">if</span>(other.tag == <span class="codestring">"RightWall"</span>) {
      <span class="codecomment">// If collided with the right wall, set</span>
      <span class="codecomment">// the right wall flag to true</span>
      atRightWall = <span class="codeclass">false</span>;
   }
}
<div class="oldcode">
<span class="codekeyword">function</span> Update () {
   <span class="codecomment">// Player movement from input (it's a variable between -1 and 1) for</span>
   <span class="codecomment">// degree of left or right movement</span>
   <span class="codeclass">var</span> movementInput : <span class="codeclass">float</span> = <span class="codeclass">Input</span>.GetAxis(<span class="codestring">"Horizontal"</span>);
   
</div>   <span class="codecomment">// Move the player object</span>
   <span class="codekeyword">if</span>(atLeftWall && (movementInput < <span class="codenumber">0</span>) )  {
      movementInput = <span class="codenumber">0</span>;
   }
   <span class="codekeyword">if</span>(atRightWall && (movementInput > <span class="codenumber">0</span>) )  {
      movementInput = <span class="codenumber">0</span>;
   }
<div class="oldcode">   
   transform.Translate( <span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(<span class="codeclass">Time</span>.deltaTime * speed * movementInput,<span class="codenumber">0</span>,<span class="codenumber">0</span>));   
}</span></pre>	</div>	

	<p>The <tt>atLeftWall</tt> and <tt>atRightWall</tt> flags indicate whether <em>Player</em> is touching one of the walls.  They're set in the <em>OnTriggerEnter2D()</em> and cleared in the <em>OnTriggerExit2D()</em> method.  That means the flag is true while the player stays in collision with the wall.</p>
	
	<p>In the <em>Update()</em>, conditions have been added so that when <tt>atLeftWall</tt> is true, movement to the left is not allowed, and when <tt>atRigthWall</tt> is true, movement to the right is not allowed.</p> 

	<li>Play the game.  The <em>Player</em> sprite should be confined to the region between the walls.</li>  
	
	<li>Here's a diagram of the game object hierarchy of the current scene:</li>
	
	<img class="block" src="images/hierarchy03.png" style="max-width:1198px;max-height:1821px" title="Game object tree">
</ol>
</div>

<h3>Adding projectiles</h3>
<div class="block">
<ol class="toplist">

	<li>Create a new <em>2D Object | Sprite</em>.  Name it <em>AlienShot</em>.  Set its <em>Sprite</em> property to "bomb" image and <em>Scale</em> to (1.2,1.2,1).  Position doesn't matter since you're going to make this game object into a prefab for the alien projectile.</li>
	<li>Create a new <em>2D Object | Sprite</em>.  Name it <em>PlayerShot</em>.  Set its <em>Sprite</em> property to "star" image and <em>Scale</em> to (1.5,1.5,1).  This game object will be made into the player projectile.</li>
	<li>Both the alien and the player projectiles will be controlled by one script.  In <em>Assets | Scripts</em> create a new Javascript and name it <em>ProjectileClass</em>.  Double-click to open it in MonoDevelop, and paste in the following code</li>
	
	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/03/ProjectileClass.js">ProjectileClass.js</a></div>
	<pre><span class="codehash">#pragma strict</span>

<span class="codecomment">// The speed fo the projectile</span>
<span class="codeclass">var</span> speed : <span class="codeclass">float</span>;

<span class="codecomment">// Flag identifyng whether the projectile</span>
<span class="codecomment">// is sent by enemy or the player</span>
<span class="codeclass">var</span> enemyProjectile : <span class="codeclass">boolean</span>;

<span class="codecomment">// Per each frame...</span>
<span class="codekeyword">function</span> Update () {
   <span class="codecomment">// The projectile travels up (in the direction of positive y axis), but</span>
   <span class="codecomment">// the movement is multiplies by speed (so negative speed will get </span>
   <span class="codecomment">// move the projectile down)</span>
   transform.Translate(<span class="codeclass">Vector3</span>.up * speed * <span class="codeclass">Time</span>.deltaTime);
}</pre>	</div>	

	<p>
	The script moves the game object during <em>Update()</em>.  This time, instead of creating a new 3D vector to pass to the <em>Translate()</em> method, <a href="http://docs.unity3d.com/ScriptReference/Vector3-up.html"><span class="codeclass">Vector3</span>.up</a> is used.  It's a built-in shorthand for <span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(0,1,0).  Multiplying the vector times <tt>speed</tt> (and time since the last <em>Update()</em>) produces a vertical translation.  Sign of the speed variable controls whether the translation is going up or down.</p>
	
	<p>The <tt>enemyProjectile</tt> boolean denotes whether a particular object instance of this script is a component of the alien or player projectile.  It will be useful when dealing with collisions.</p>
	
	<li>Add the <em>ProjectileClass</em> script component to the <em>AlienShot</em> game object.  Set its <em>Speed</em> attribute to -5 and <em>Enemy Projectile</em> to true.</li>
	<li>Add the <em>ProjectileClass</em> script component to the <em>PlayerShot</em> game object.  Set its <em>Speed</em> variable to 5 and <em>Enemy Projectile</em> to false.</li>
	
	<li>Press play, the projectiles should move in opposite directions</li>
	
	<li>Both projectile types need to be instantiated from a script: either at random time (for <em>AlienShot</em>s) or after pressing <em>Fire</em> (for <em>PlayerShots</em>s).  Drag the <em>AlienShot</em> and then <em>PlayerShot</em> game objects from the <strong>Hierarchy panel</strong> to <em>Assets | Prefabs</em> to create corresponding prefabs.  Once their prefabs have been made, you can delete the two game objects from the scene.</li>
	
	<li>Create a new Javascript in <em>Assets | Scripts</em>.  Name it <em>AttackScript</em>.  Double-click to open it in MonoDevelop and paste in the following code:</li>
	
 	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/03/AttackClass.js">AttackClass.js</a></div>
	<pre><span class="codehash">#pragma strict</span>

<span class="codecomment">// Variable storing projectile object</span>
<span class="codecomment">// prefab</span>
<span class="codeclass">var</span> shotPrefab : Transform;

<span class="codecomment">// Probability of auto-shoot (0 if</span>
<span class="codecomment">// no autoshoot)</span>
<span class="codeclass">var</span> autoShootProbability: <span class="codeclass">float</span>;

<span class="codecomment">// Cooldown time for firing</span>
<span class="codeclass">var</span> fireCooldownTime: <span class="codeclass">float</span>;

<span class="codecomment">// Private variables (not visible in the Inspector panel)</span>

<span class="codecomment">// How much time is left until able to fire again </span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> fireCooldownTimeLeft: <span class="codeclass">float</span> = <span class="codenumber">0</span>;

<span class="codecomment">// Per every frame...</span>
<span class="codekeyword">function</span> Update () {
   <span class="codecomment">// If still some time left until can fire again</span>
   <span class="codecomment">// reduce the time by the time since last</span>
   <span class="codecomment">// frame </span>
   <span class="codekeyword">if</span>(fireCooldownTimeLeft > <span class="codenumber">0</span>) {
      fireCooldownTimeLeft -= <span class="codeclass">Time</span>.deltaTime;
   }

   <span class="codecomment">// If auto-shoot probability is more than zero...</span>
   <span class="codekeyword">if</span>(autoShootProbability > <span class="codenumber">0</span>) {
      <span class="codecomment">// Generate number a random number between 0 and 1</span>
      <span class="codeclass">var</span> randomSample : <span class="codeclass">float</span> = Random.Range(<span class="codenumber">0f</span>, <span class="codenumber">1f</span>);
      <span class="codecomment">// If that random number is less than the </span>
      <span class="codecomment">// probability of shooting, then try to shoot</span>
      <span class="codekeyword">if</span>(randomSample < autoShootProbability) {
         Shoot();   
      }
   }
}

<span class="codecomment">// Method for firing a projectile</span>
<span class="codekeyword">function</span> Shoot() {
   <span class="codecomment">// Shoot only if the fire cooldown period</span>
   <span class="codecomment">// has expired</span>
   <span class="codekeyword">if</span>(fireCooldownTimeLeft <= <span class="codenumber">0</span>) {
      <span class="codecomment">// Create a projectile object from </span>
      <span class="codecomment">// the shot prefab</span>
      <span class="codeclass">var</span> shot = Instantiate(shotPrefab);
      <span class="codecomment">// Set the position of the projectile object</span>
      <span class="codecomment">// to the position of the firing game object</span>
       shot.position = transform.position;
      <span class="codecomment">// Set time left until next shot</span>
      <span class="codecomment">// to the cooldown time</span>
      fireCooldownTimeLeft = fireCooldownTime;   
   }
}</pre>	</div>
	
	<p>In the script there are three public variables: <tt>shotPrefab</tt> is a reference to the prefab corresponding to the shot game object instantiated by the script, <tt>autoShootProbability</tt> is the probability of firing a shot at random, and <em>fireCooldownTime</em> is the time (in seconds) between consecutive shots.</p>
	
	<p>There is also a private variable <tt>fireCooldownTimeLeft</tt> which tracks the amount of cool down time left before the next shot.  This counter is set to <em>fireCooldownTime</em> after each shot, and decremented in the the <em>Update()</em> method with the time since the previous <em>Update()</em>.</p>
	
	<p>If <tt>autoShotoProbability</tt> is not 0, a random number sample is drawn from uniform distribution between 0 and 1.  If that sample is less than the shoot probability, then the <em>Shoot()</em> method is called.</p>
	
	<p>Inside the <em>Shoot()</em> method, if the <tt>fireCooldownTimeLeft</tt> has expired, a projectile is spawned from the <tt>shotPrefab</tt> variable.  The new game object is positioned where the object doing the shooting happens to be at this time, and the <tt>fireCooldownTimeLeft</tt> is reset to the <tt>fireCooldownTime</tt>.</p>
	
	<li>Find the <em>Alien</em> prefab in the <em>Assets | Prefabs</em>.  Add the <em>AttackClass</em> script component.  Initialise all the public variables: dragging the <em>AlienShot</em> prefab to <em>Shot Prefab</em>, set <em>Auto Shoot Probability</em> to 0.001 and <em>Fire Cooldown Time</em> to 1.</li>
	
	<img class="block" src="images/screen08.png" style="max-width:1068px;max-height:825px" title="AttackClass script settings for Alien prefab">

	<li>Press play.  Aliens should be dropping their bombs now.</li>
	
	<li>Stop the game.  Select the <em>Player</em> game object and add the <em>AttackClass</em> script component.  Initialise all the variables again, but this time:  drag the <em>PlayerShot</em> prefab to <em>Shot Prefab</em>, set <em>Auto Shoot Probability</em> to 0 and <em>Fire Cooldown Time</em> to 0.5.</li>

	<img class="block" src="images/screen09.png" style="max-width:1068px;max-height:825px" title="AttackClass script settings for Player">
	
	<li>The probability of shooting automatically for the <em>Player</em> is set to 0, because player shots are to be triggered by user input.  To enable shooting on <em>Space</em> press, add the following code to the <em>PlayerClass</em> script:</li>
	
	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/04/PlayerClass.js">PlayerClass.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

<span class="codecomment">// Private variables (not visible in the Inspector panel)</span>
<span class="codecomment">// The speed of player movement</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> speed : <span class="codeclass">float</span> = <span class="codenumber">10</span>;

<span class="codecomment">// Flag indicating whether the player is at the </span>
<span class="codecomment">// left edge of the screen</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> atLeftWall: <span class="codeclass">boolean</span> = <span class="codeclass">false</span>;

<span class="codecomment">// Flag indicating whether the player is at the </span>
<span class="codecomment">// right edge of the screen</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> atRightWall: <span class="codeclass">boolean</span> = <span class="codeclass">false</span>;

<span class="codecomment">// On collision with a trigger collider...</span>
<span class="codekeyword">function</span> OnTriggerEnter2D(other : Collider2D) {
   <span class="codecomment">// Check the tag of the object the player</span>
   <span class="codecomment">// has collided with</span>
   <span class="codekeyword">if</span>(other.tag == <span class="codestring">"LeftWall"</span>) {
      <span class="codecomment">// If collided with the left wall, set</span>
      <span class="codecomment">// the left wall flag to true</span>
      atLeftWall = <span class="codeclass">true</span>;
   } <span class="codekeyword">else</span> <span class="codekeyword">if</span>(other.tag == <span class="codestring">"RightWall"</span>) {
      <span class="codecomment">// If collided with the right wall, set</span>
      <span class="codecomment">// the right wall flag to true</span>
      atRightWall = <span class="codeclass">true</span>;
   }           
}

<span class="codecomment">// When no longer colliding with an object...</span>
<span class="codekeyword">function</span> OnTriggerExit2D(other : Collider2D) {
   <span class="codecomment">// Check the tag of the object the player</span>
   <span class="codecomment">// has ceased to collide with</span>
   <span class="codekeyword">if</span>(other.tag == <span class="codestring">"LeftWall"</span>) {
      <span class="codecomment">// If collided with the left wall, set</span>
      <span class="codecomment">// the left wall flag to true</span>
      atLeftWall = <span class="codeclass">false</span>;
   } <span class="codekeyword">else</span> <span class="codekeyword">if</span>(other.tag == <span class="codestring">"RightWall"</span>) {
      <span class="codecomment">// If collided with the right wall, set</span>
      <span class="codecomment">// the right wall flag to true</span>
      atRightWall = <span class="codeclass">false</span>;
   }
}

<span class="codekeyword">function</span> Update () {
   <span class="codecomment">// Player movement from input (it's a variable between -1 and 1) for</span>
   <span class="codecomment">// degree of left or right movement</span>
   <span class="codeclass">var</span> movementInput : <span class="codeclass">float</span> = <span class="codeclass">Input</span>.GetAxis(<span class="codestring">"Horizontal"</span>);
   
   <span class="codecomment">// Move the player object</span>
   <span class="codekeyword">if</span>(atLeftWall && (movementInput < <span class="codenumber">0</span>) )  {
      movementInput = <span class="codenumber">0</span>;
   }
   <span class="codekeyword">if</span>(atRightWall && (movementInput > <span class="codenumber">0</span>) )  {
      movementInput = <span class="codenumber">0</span>;
   }
   
   transform.Translate( <span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(<span class="codeclass">Time</span>.deltaTime * speed * movementInput,<span class="codenumber">0</span>,<span class="codenumber">0</span>));   
   
</div>   <span class="codekeyword">if</span>(<span class="codeclass">Input</span>.GetButton(<span class="codestring">"Jump"</span>)) {
      <span class="codecomment">// Get player's attack component</span>
      <span class="codecomment">// and execute its Shoot() method</span>
      <span class="codeclass">var</span> attack : AttackClass;
      attack = GetComponent(AttackClass);
      attack.Shoot();
   }
<div class="oldcode">}</span></pre>	</div>	
	
	<p>The <a href="http://docs.unity3d.com/ScriptReference/Input.GetButton.html">GetButton()</a> method, like the <em>GetAxis()</em>, is a pre-built method for indicating user input on pre-defined set of keys.  In the default setting "Jump" corresponds to the <em>Space</em> key.</p>
	
	<li>Hit play - should be able to shoot now.</li>
	
	<video class="blocks" width="640" height="480" controls> <!--autoplay="autoplay" loop>-->
	  	<source src="videos/lab02vid06.mp4" type="video/mp4">
  		<source src="videos/lab02vid06.webm" type="video/webm">
		Your browser does not support the video tag.
	</video> 
		
</ol>
</div>

<h3>Projectile collisions</h3>
<div class="block">
In order for a projectile to hit an <em>Alien</em> or the <em>Player</em> we need to detect collisions.

<ol class="toplist">

	<li>Find the <em>AlienShot</em> prefab in the <em>Assets | Prefabs</em> and add the <em>Physics 2D | Circle Collider 2D</em> component.  Enable the <em>Is Trigger</em> flag and set the <em>Radius</em> of the collider to 0.2.</li>
	
	<li>Do the same for the <em>PlayerShot</em>.  Enable the <em>Is Trigger</em> flag as well and and set the <em>Radius</em> of the collider to 0.12.</li>
	
	<li>The reason why these colliders are set as triggers, because we don't want them physics engine to decide what to do on collision.  Instead, we'll handle the collision events in scripts.</li>
	
	<li>Add the following code to the <em>OnTriggerEnter2D()</em> function in <em>PlayerClass</em> scritp:</li>
		
	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/05/PlayerClass.js">PlayerClass.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

<span class="codecomment">// Private variables (not visible in the Inspector panel)</span>
<span class="codecomment">// The speed of player movement</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> speed : <span class="codeclass">float</span> = <span class="codenumber">10</span>;

<span class="codecomment">// Flag indicating whether the player is at the </span>
<span class="codecomment">// left edge of the screen</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> atLeftWall: <span class="codeclass">boolean</span> = <span class="codeclass">false</span>;

<span class="codecomment">// Flag indicating whether the player is at the </span>
<span class="codecomment">// right edge of the screen</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> atRightWall: <span class="codeclass">boolean</span> = <span class="codeclass">false</span>;

<span class="codecomment">// On collision with a trigger collider...</span>
<span class="codekeyword">function</span> OnTriggerEnter2D(other : Collider2D) {
   <span class="codecomment">// Check the tag of the object the player</span>
   <span class="codecomment">// has collided with</span>
   <span class="codekeyword">if</span>(other.tag == <span class="codestring">"LeftWall"</span>) {
      <span class="codecomment">// If collided with the left wall, set</span>
      <span class="codecomment">// the left wall flag to true</span>
      atLeftWall = <span class="codeclass">true</span>;
   } <span class="codekeyword">else</span> <span class="codekeyword">if</span>(other.tag == <span class="codestring">"RightWall"</span>) {
      <span class="codecomment">// If collided with the right wall, set</span>
      <span class="codecomment">// the right wall flag to true</span>
      atRightWall = <span class="codeclass">true</span>;
</div>   } <span class="codekeyword">else</span> {
      <span class="codecomment">// Collision with something that is not a wall</span>
      <span class="codecomment">// Check if collided with a projectile</span>
      <span class="codeclass">var</span> projectile : ProjectileClass;
      
      <span class="codecomment">// A projectile has a ProjectileClass script component,</span>
      <span class="codecomment">// so try to get a reference to that component</span>
      projectile = other.GetComponent(ProjectileClass);

      <span class="codecomment">//If that refernce is not null, then check if it's an enemyProjectile      </span>
      <span class="codekeyword">if</span>(projectile != <span class="codeclass">null</span> && projectile.enemyProjectile) {
         <span class="codecomment">// Collided with an enemy projectile</span>
         
         <span class="codecomment">// Destroy the projectile game object</span>
         Destroy(other.gameObject);
      }           
<div class="oldcode">   }        
}

<span class="codecomment">// When no longer colliding with an object...</span>
<span class="codekeyword">function</span> OnTriggerExit2D(other : Collider2D) {
   <span class="codecomment">// Check the tag of the object the player</span>
   <span class="codecomment">// has ceased to collide with</span>
   <span class="codekeyword">if</span>(other.tag == <span class="codestring">"LeftWall"</span>) {
      <span class="codecomment">// If collided with the left wall, set</span>
      <span class="codecomment">// the left wall flag to true</span>
      atLeftWall = <span class="codeclass">false</span>;
   } <span class="codekeyword">else</span> <span class="codekeyword">if</span>(other.tag == <span class="codestring">"RightWall"</span>) {
      <span class="codecomment">// If collided with the right wall, set</span>
      <span class="codecomment">// the right wall flag to true</span>
      atRightWall = <span class="codeclass">false</span>;
   }
}

<span class="codekeyword">function</span> Update () {
   <span class="codecomment">// Player movement from input (it's a variable between -1 and 1) for</span>
   <span class="codecomment">// degree of left or right movement</span>
   <span class="codeclass">var</span> movementInput : <span class="codeclass">float</span> = <span class="codeclass">Input</span>.GetAxis(<span class="codestring">"Horizontal"</span>);
   <span class="codecomment">// Move the player object</span>
   <span class="codekeyword">if</span>(atLeftWall && (movementInput < <span class="codenumber">0</span>) )  {
      movementInput = <span class="codenumber">0</span>;
   }
   <span class="codekeyword">if</span>(atRightWall && (movementInput > <span class="codenumber">0</span>) )  {
      movementInput = <span class="codenumber">0</span>;
   }
   
   transform.Translate( <span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(<span class="codeclass">Time</span>.deltaTime * speed * movementInput,<span class="codenumber">0</span>,<span class="codenumber">0</span>));   
   
   <span class="codekeyword">if</span>(<span class="codeclass">Input</span>.GetButton(<span class="codestring">"Jump"</span>)) {
      <span class="codecomment">// Get player's attack component</span>
      <span class="codecomment">// and execute its Shoot() method</span>
      <span class="codeclass">var</span> attack : AttackClass;
      attack = GetComponent(AttackClass);
      attack.Shoot();
   }
}</span></pre>	</div>	
	
	<p>The added block of code is executed when the <em>Player</em> object collides with a trigger that is not a <tt>LeftWall</tt> or a <tt>RightWall</tt>.  In order to check whether the <tt>other</tt> collider comes from a projectile, a check is made to see if it's got a <em>ProjectileClass</em> component.  The <em>GetComponent()</em> method returns a non-null reference if that's the case.</p>  
	
	<p>At that point, another check needs to be made, whether the projectile is an enemy projectile or not.  If the <tt>enemyProjectile</tt> flag of the fetched <em>ProjectileClass</em> component is true, then the <em>Player</em> has been hit by an alien projectile.  When that occurs, the <a href="http://docs.unity3d.com/ScriptReference/Object.Destroy.html">Destroy()</a> function is used to remove the <tt>other</tt> game object (the projectile) and the current game object (the <em>Player</em>) from the scene.</p>
	
	<li>Play the game.  Once hit with a bomb, the <em>Player</em> game object and the projectile should disappear from the scene.</li>
	
	<li>Add the following code to the <em>OnTriggerEnter2D()</em> method of the <em>AlienClass</em> script:</li>
	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/05/AlienClass.js">AlienClass.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

<span class="codecomment">//Points the alien is worth</span>
<span class="codeclass">var</span> points: int = <span class="codenumber">100</span>;

<span class="codecomment">// When enemy collides with an object with a</span>
<span class="codecomment">// collider that is a trigger...</span>
<span class="codekeyword">function</span> OnTriggerEnter2D(other : Collider2D) {
   <span class="codeclass">var</span> enemyWave : EnemyWaveClass;

   <span class="codecomment">// Check if colliding with the left or right wall</span>
   <span class="codecomment">// (by checking the tags of the collider that the enemy</span>
   <span class="codecomment">//  collided with)</span>
   <span class="codekeyword">if</span>(other.tag == <span class="codestring">"LeftWall"</span>) {
      <span class="codecomment">// If collided with the left wall, get a reference</span>
      <span class="codecomment">// to the EnemyWave object, which should be a component</span>
      <span class="codecomment">// of enemies parent</span>
      enemyWave = transform.parent.GetComponent(EnemyWaveClass);
      <span class="codecomment">// Set direction of the wave</span>
      enemyWave.SetDirectionRight();
   } <span class="codekeyword">else</span> <span class="codekeyword">if</span>(other.tag == <span class="codestring">"RightWall"</span>) {
      <span class="codecomment">// If collided with the right wall, get a reference</span>
      <span class="codecomment">// to the EnemyWave object, which should be a component</span>
      <span class="codecomment">// of enemies parent</span>
      enemyWave = transform.parent.GetComponent(EnemyWaveClass);
      <span class="codecomment">// Set direction of the wave</span>
      enemyWave.SetDirectionLeft();
</div>   } <span class="codekeyword">else</span> {
      <span class="codecomment">// Collision with something that is not a wall</span>
      <span class="codecomment">// Check if collided with a projectile</span>
      <span class="codeclass">var</span> projectile : ProjectileClass;
      
      <span class="codecomment">// A projectile has a ProjectileClass script component,</span>
      <span class="codecomment">// so try to get a reference to that component</span>
      projectile = other.GetComponent(ProjectileClass);

      <span class="codecomment">//If that refernce is not null, then check if it's an enemyProjectile      </span>
      <span class="codekeyword">if</span>(projectile != <span class="codeclass">null</span> && !projectile.enemyProjectile) {
         <span class="codecomment">// Collided with non enemy projectile (so a player projectile)</span>
         
         <span class="codecomment">// Destroy the projectile game object</span>
         Destroy(other.gameObject);
         
         <span class="codecomment">// Destroy self</span>
         Destroy(gameObject);
      }           
<div class="oldcode">   }    
}</span></pre>	</div>	

	<p>Just like in <em>PlayerClass</em>, this code follows a test for collision with the walls, and checks for a collision with a projectile.  The only difference is that the hit occurs if the <tt>enemyProjectile</tt> flag is false, signifying a collision with the player's projectile.
	
	<li>Now you should be able to shoot the aliens when you play the game.</li>
	

	<video class="blocks" width="640" height="480" controls> <!--autoplay="autoplay" loop>-->
	  	<source src="videos/lab02vid07.mp4" type="video/mp4">
  		<source src="videos/lab02vid07.webm" type="video/webm">
		Your browser does not support the video tag.
	</video> 

	<li>Did you notice that the game objects for the alien shots that miss and go off screen linger forever in the <strong>Hierarchy panel</strong>?  That's because these shots are still in the scene, just off camera.  They don't get rendered, but they are still in the scene.  Their scripts still get executed, and if too many of those objects are lingering around, eventually they can slow down the whole game.   Therefore, you need to make sure that a projectile that goes off screen gets destroyed.</li>

	<li>Create another Javascript.  Name it <em>UtilScript</em> and paste in the following code:</li>

	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/05/UtilScript.js">UtilScript.js</a></div>
	<pre><span class="codehash">#pragma strict</span>

<span class="codecomment">// Returns true if game object is visible by the specified camera,</span>
<span class="codecomment">// otherwise returns false.</span>
<span class="codekeyword">static</span> <span class="codekeyword">function</span> isVisible(renderer : Renderer, camera : <span class="codeclass">Camera</span>) {
   <span class="codeclass">var</span> planes : Plane[];
   planes = GeometryUtility.CalculateFrustumPlanes(camera);
   return GeometryUtility.TestPlanesAABB(planes, renderer.bounds);
}</pre>	</div>	
	
	<p>This is a neat little function which will tell you if a given object is in the view of a specific camera.  This method is <span class="codekeyword">static</span>, which means it can invoked without creating an instance of the <em>UtilScript</em>.  Remember, in Unity, every script is taken as a definition of a class with the same name.  When you add script components to game objects, you are instructing the engine to create (and attach) an instance of an object of the corresponding class.  These object instances carry their own state in their public and private variables.  Static variables are shared across all the object instances of a particular class.  You can think of them as "global" variables.  Static methods are methods that do not depend on the internal state of an object instance.  They cannot read or write to internal variables unless these variables are static.  Since they don't depend on the state of a given object, static methods can be reference through their class (script) name.</p>

	<li>Here's how to the <em>isVisible()</em> static method to assure projectile destruction once it goes off screen:</li>
	
	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/05/ProjectileClass.js">ProjectileClass.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

<span class="codecomment">// The speed fo the projectile</span>
<span class="codeclass">var</span> speed : <span class="codeclass">float</span>;

<span class="codecomment">// Flag identifyng whether the projectile</span>
<span class="codecomment">// is sent by enemy or the player</span>
<span class="codeclass">var</span> enemyProjectile : <span class="codeclass">boolean</span>;

<span class="codecomment">// Per each frame...</span>
<span class="codekeyword">function</span> Update () {
   <span class="codecomment">// The projectile travels up (in the direction of positive y axis), but</span>
   <span class="codecomment">// the movement is multiplies by speed (so negative speed will get </span>
   <span class="codecomment">// move the projectile down)</span>
   transform.Translate(<span class="codeclass">Vector3</span>.up * speed * <span class="codeclass">Time</span>.deltaTime);
   
</div>   <span class="codecomment">// Check if the game object is visible, if not, destroy self   </span>
   <span class="codekeyword">if</span>(!UtilScript.isVisible(renderer, <span class="codeclass">Camera</span>.main)) {
      Destroy(gameObject);
   }
<div class="oldcode">}</span></pre>	</div>	
	
	<p>
	The <tt>renderer</tt> variable is a built-in reference for the rendered part of the game object.  The new code checks if the renderer is visible from the <em>MainCamera</em>'s point of view - if not, it destroys itself.</p>
	
	<li>The diagram below summarises the current game object tree:</li>
	
	<img class="block" src="images/hierarchy04.png" style="max-width:1189px;max-height:2727px" title="Game object tree">
</ol>
</div>

<h3>Game Master</h3>

<div class="block">
You're done with the game mechanics.  Now need to start keeping track of player lives and points for shooting aliens.
<ol class="toplist">

	<li>Create a new Javascript.  Name it <em>GameMaster</em> and paste in the following code:</li>

	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/06/GameMaster.js">GameMaster.js</a></div>
	<pre><span class="codehash">#pragma strict</span>

<span class="codecomment">// Static variables - there's only one instance</span>
<span class="codecomment">// of this variable for the entire game</span>

<span class="codecomment">// Player health - always start with 3 lives</span>
<span class="codekeyword">static</span> <span class="codeclass">var</span> playerHealth: int = <span class="codenumber">3</span>;
<span class="codecomment">// Player score</span>
<span class="codekeyword">static</span> <span class="codeclass">var</span> playerScore: int = <span class="codenumber">0</span>;

<span class="codekeyword">function</span> Awake () {
   <span class="codecomment">// Never destroy this object, even</span>
   <span class="codecomment">// when level is re-loaded</span>
   DontDestroyOnLoad(<span class="codekeyword">this</span>);
}

<span class="codecomment">// Method to call when enemy is hit</span>
<span class="codekeyword">static</span> <span class="codekeyword">function</span> EnemyHit(alien : AlienClass) {
   <span class="codecomment">// Add enemy points to player's score</span>
   playerScore += alien.points;
}

<span class="codecomment">// Method to call when player is hit</span>
<span class="codekeyword">static</span> <span class="codekeyword">function</span> PlayerHit() {
   playerHealth--;
   <span class="codecomment">// Reduce player's lives</span>
   <span class="codekeyword">if</span>(playerHealth > <span class="codenumber">0</span>) {
      <span class="codecomment">// If more lives left, then reload the</span>
      <span class="codecomment">// level </span>
      Application.LoadLevel(<span class="codestring">"Level1"</span>);
   }
}</pre>	</div>	

	<p>The <em>GameMaster</em> class is going to be a singleton, meaning there's going to be only one instance of it.  Different programming languages provide different means of implementing a singleton object.  In this case, all the variables and method (aside from <em>Awake()</em>) are made <span class="codekeyword">static</span>.  This means that there is nothing preventing you from creating multiple instances of this object, but all the variables are shared, effectively assuring there's only one state, as if there was only one object.</p>
	
	<p>The <a href="http://forum.unity3d.com/threads/start-vs-awake.41633/"><em>Awake()</em></a> method is called by the game engine when the object is created - it's similar to <em>Start()</em>, but it's called earlier on.  Inside <em>Awake()</em> the inherited <em>DontDestroyOnLoad()</em> method is invoked with a reference to the created object (<span=class="codecode">this</span>).  This instructs the game engine that this object is not to be destroyed when another scene is loaded.  By default, game objects do not persist between scenes.   The <em>GameMaster</em> singleton is going to linger around throughout the life span of the entire game.</p>

	<p>The two <span class="codekeyword">static</span> variables, <tt>playerHealth</tt> and <tt>playerScore</tt> keep track of the number of lives the player has left (starting out with 3) and the player score (starting out with 0)</p>
	
	<p>The <em>EnemyHit()</em> method is meant to be invoked after an alien is hit, so that player's score can be updated.  This method accepts a reference to an object of <em>AlienClass</em> type, which contains a variable specifying the number of points the aline is worth (recall the <tt>points</tt> variable in the <em>AlienClass</em> script).  The reason why we pass a reference to the entire object, instead of just an integer value for the points, will become apparent later on, when game over condition is gets implemented.</p>  
	
	
	<p>The <em>PlayerHit()</em> method is meant to be invoked after the player is hit.  The <tt>playerHealth</tt> variable is decremented for every hit.  Once it reaches 0, the current scene is reloaded.</p> 

	<li>To report alien hit add the following code to the <em>AlienClass</em> script:</li>	
	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/06/AlienClass.js">AlienClass.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

<span class="codecomment">// When enemy collides with an object with a</span>
<span class="codecomment">// collider that is a trigger...</span>
<span class="codekeyword">function</span> OnTriggerEnter2D(other : Collider2D) {
   <span class="codeclass">var</span> enemyWave : EnemyWaveClass;

   <span class="codecomment">// Check if colliding with the left or right wall</span>
   <span class="codecomment">// (by checking the tags of the collider that the enemy</span>
   <span class="codecomment">//  collided with)</span>
   <span class="codekeyword">if</span>(other.tag == <span class="codestring">"LeftWall"</span>) {
      <span class="codecomment">// If collided with the left wall, get a reference</span>
      <span class="codecomment">// to the EnemyWave object, which should be a component</span>
      <span class="codecomment">// of enemies parent</span>
      enemyWave = transform.parent.GetComponent(EnemyWaveClass);
      <span class="codecomment">// Set direction of the wave</span>
      enemyWave.SetDirectionRight();
   } <span class="codekeyword">else</span> <span class="codekeyword">if</span>(other.tag == <span class="codestring">"RightWall"</span>) {
      <span class="codecomment">// If collided with the right wall, get a reference</span>
      <span class="codecomment">// to the EnemyWave object, which should be a component</span>
      <span class="codecomment">// of enemies parent</span>
      enemyWave = transform.parent.GetComponent(EnemyWaveClass);
      <span class="codecomment">// Set direction of the wave</span>
      enemyWave.SetDirectionLeft();
   } <span class="codekeyword">else</span> {
      <span class="codecomment">// Collision with something that is not a wall</span>
      <span class="codecomment">// Check if collided with a projectile</span>
      <span class="codeclass">var</span> projectile : ProjectileClass;
      
      <span class="codecomment">// A projectile has a ProjectileClass script component,</span>
      <span class="codecomment">// so try to get a reference to that component</span>
      projectile = other.GetComponent(ProjectileClass);

      <span class="codecomment">//If that refernce is not null, then check if it's an enemyProjectile      </span>
      <span class="codekeyword">if</span>(projectile != <span class="codeclass">null</span> && !projectile.enemyProjectile) {
         <span class="codecomment">// Collided with non enemy projectile (so a player projectile)</span>
         
         <span class="codecomment">// Destroy the projectile game object</span>
         Destroy(other.gameObject);
         
</div>         <span class="codecomment">// Report enemy hit to the game master</span>
         GameMaster.EnemyHit(<span class="codekeyword">this</span>);                  
<div class="oldcode">
         <span class="codecomment">// Destroy self</span>
         Destroy(gameObject);         
      }           
   }    
}</span></pre>	</div>	
	
	<p>The <em>AlienClass</em> component of the alien that got hit passes a reference to itself (<span class="codekeyword">this</span>) to the <em>EnemyHit()</em> method of <em>GameMaster</em>.</p>
	
	<li>To report player hit, add the following code to the <em>PlayerClass</em> script:<li>
	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/06/PlayerClass.js">PlayerClass.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

<span class="codecomment">// Private variables (not visible in the Inspector panel)</span>
<span class="codecomment">// The speed of player movement</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> speed : <span class="codeclass">float</span> = <span class="codenumber">10</span>;

<span class="codecomment">// Flag indicating whether the player is at the </span>
<span class="codecomment">// left edge of the screen</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> atLeftWall: <span class="codeclass">boolean</span> = <span class="codeclass">false</span>;

<span class="codecomment">// Flag indicating whether the player is at the </span>
<span class="codecomment">// right edge of the screen</span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> atRightWall: <span class="codeclass">boolean</span> = <span class="codeclass">false</span>;

<span class="codecomment">// On collision with a trigger collider...</span>
<span class="codekeyword">function</span> OnTriggerEnter2D(other : Collider2D) {
   <span class="codecomment">// Check the tag of the object the player</span>
   <span class="codecomment">// has collided with</span>
   <span class="codekeyword">if</span>(other.tag == <span class="codestring">"LeftWall"</span>) {
      <span class="codecomment">// If collided with the left wall, set</span>
      <span class="codecomment">// the left wall flag to true</span>
      atLeftWall = <span class="codeclass">true</span>;
   } <span class="codekeyword">else</span> <span class="codekeyword">if</span>(other.tag == <span class="codestring">"RightWall"</span>) {
      <span class="codecomment">// If collided with the right wall, set</span>
      <span class="codecomment">// the right wall flag to true</span>
      atRightWall = <span class="codeclass">true</span>;
   } <span class="codekeyword">else</span> {
      <span class="codecomment">// Collision with something that is not a wall</span>
      <span class="codecomment">// Check if collided with a projectile</span>
      <span class="codeclass">var</span> projectile : ProjectileClass;
      
      <span class="codecomment">// A projectile has a ProjectileClass script component,</span>
      <span class="codecomment">// so try to get a reference to that component</span>
      projectile = other.GetComponent(ProjectileClass);

      <span class="codecomment">//If that refernce is not null, then check if it's an enemyProjectile      </span>
      <span class="codekeyword">if</span>(projectile != <span class="codeclass">null</span> && projectile.enemyProjectile) {
         <span class="codecomment">// Collided with an enemy projectile</span>
         
         <span class="codecomment">// Destroy the projectile game object</span>
         Destroy(other.gameObject);

</div>         <span class="codecomment">// Report player hit to the game master</span>
         GameMaster.PlayerHit();         
<div class="oldcode">                           
         <span class="codecomment">// Destroy self</span>
         Destroy(gameObject);         
      }           
   }        
}

<span class="codecomment">// When no longer colliding with an object...</span>
<span class="codekeyword">function</span> OnTriggerExit2D(other : Collider2D) {
   <span class="codecomment">// Check the tag of the object the player</span>
   <span class="codecomment">// has ceased to collide with</span>
   <span class="codekeyword">if</span>(other.tag == <span class="codestring">"LeftWall"</span>) {
      <span class="codecomment">// If collided with the left wall, set</span>
      <span class="codecomment">// the left wall flag to true</span>
      atLeftWall = <span class="codeclass">false</span>;
   } <span class="codekeyword">else</span> <span class="codekeyword">if</span>(other.tag == <span class="codestring">"RightWall"</span>) {
      <span class="codecomment">// If collided with the right wall, set</span>
      <span class="codecomment">// the right wall flag to true</span>
      atRightWall = <span class="codeclass">false</span>;
   }
}

</div><span class="codecomment">// When player collides with an object that is</span>
<span class="codecomment">// not a trigger...</span>
<span class="codekeyword">function</span> OnCollisionEnter2D(other: Collision2D) {
   <span class="codecomment">// If the other object is tagged as "Player"...</span>
   <span class="codekeyword">if</span>(other.gameObject.tag == <span class="codestring">"Enemy"</span>) {
   
      <span class="codecomment">// Report player hit to the game master</span>
      GameMaster.PlayerHit();

      <span class="codecomment">// Destroy the Player game object</span>
      Destroy(gameObject);
   }
}
<div class="oldcode">
<span class="codekeyword">function</span> Update () {
   <span class="codecomment">// Player movement from input (it's a variable between -1 and 1) for</span>
   <span class="codecomment">// degree of left or right movement</span>
   <span class="codeclass">var</span> movementInput : <span class="codeclass">float</span> = <span class="codeclass">Input</span>.GetAxis(<span class="codestring">"Horizontal"</span>);
   <span class="codecomment">// Move the player object</span>
   <span class="codekeyword">if</span>(atLeftWall && (movementInput < <span class="codenumber">0</span>) )  {
      movementInput = <span class="codenumber">0</span>;
   }
   <span class="codekeyword">if</span>(atRightWall && (movementInput > <span class="codenumber">0</span>) )  {
      movementInput = <span class="codenumber">0</span>;
   }
   
   transform.Translate( <span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(<span class="codeclass">Time</span>.deltaTime * speed * movementInput,<span class="codenumber">0</span>,<span class="codenumber">0</span>));   
   
   <span class="codekeyword">if</span>(<span class="codeclass">Input</span>.GetButton(<span class="codestring">"Jump"</span>)) {
      <span class="codecomment">// Get player's attack component</span>
      <span class="codecomment">// and execute its Shoot() method</span>
      <span class="codeclass">var</span> attack : AttackClass;
      attack = GetComponent(AttackClass);
      attack.Shoot();
   }
}</span></pre>	</div>	

	<p>The first condition for declaring a hit is on collision with the enemy projectile.  The second condition is for a collision with the alien object.  This is to handle the case when the wave gets all the way to the bottom and one of the aliens collides with the player.  Since both colliders for an <em>Alien</em> and the <em>Player</em> are not triggers, the collision between the two object invokes invokes <em>OnCollisionEnter2D()</em> method, not the <em>OnTriggerEnter2D()</em> method.  Though in the game there will be non-trigger colliders, other than <em>Aliens</em>, to collide with, it's best to verify what the <em>Player</em> has collided with.  This is done by checking whether the <tt>other</tt> object carries the "Enemy" tag.</p>
	
	<div class="note">
	<img src="images/note.png" style="width:64px;max:64px">
	There is a difference between the <tt>other</tt> parameter passed in to the <em>OnTrigger()</em> and <em>OnCollision()</em> events.   In the <em>OnTrigger()</em> it refers to <em>Collider2D</em>, whereas in <em>OnCollision()</em> it refers to Collision2D.  The difference is subtle.  Whereas inside the <em>OnTrigger()</em> event the tag of the colliding object can be accessed using the <tt>other.tag</tt> reference, in the <em>OnCollision()</em> this is done through reference to <tt>other.gameObject.tag</tt>.
	</div>
	
	<li>Create a new tag.  From the main menu select <em>Edit | Project Settings | Tags and Layers</em>.  Expand the <em>Tags</em> and add a new tag string: "Enemy".</li>

	<img class="block" src="images/screen17.png" style="max-width:1071px;max-height:810px" title="">
	
	<li>Find the <em>Alien</em> prefab in the <em>Assets | Prefabs</em> and tag it with the "Enemy" tag.</li>

	<img class="block" src="images/screen18.png" style="max-width:1071px;max-height:810px" title="">
	
	<li>When playing, the level should reload the first three times the player gets hit.  After the fourth hit the <em>Player</em> sprite will remain gone.  The score is hidden from the player as well - need a GUI to display it.</li>
	
</ol>
</div>


<h3>Simple GUI</h3>
<div class="block">
Unity 4.6 introduces a powerful system for creating User Interface (UI).  We will not use it until Lab07.  For now we'll make do with the legacy GUI system.

<ol class="toplist">
	
	<li>For every script that implements it, the game engine will invoke the <em>OnGUI()</em>.  This will occur a number of times in-between rendering of the frames.  For details on the execution  order of different methods in the game loop see the article on <a href="http://docs.unity3d.com/Manual/ExecutionOrder.html">Execution Order of Event Functions</a> in the Unity manual.  <a href="http://docs.unity3d.com/ScriptReference/MonoBehaviour.OnGUI.html"><em>OnGUI()</em></a> is designed for scripting of the user interface.</li>
	
	
	<li>Update the LevelMaster script with the following code:</li>

	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/06/LevelMaster.js">LevelMaster.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

<span class="codecomment">// Variables referencing two edge colliders</span>
<span class="codeclass">var</span> leftWall: EdgeCollider2D;
<span class="codeclass">var</span> rightWall: EdgeCollider2D;

<span class="codecomment">// When creating the object...</span>
<span class="codekeyword">function</span> Start () {

   <span class="codecomment">// Get the width and height of the camera (in pixels)</span>
   <span class="codeclass">var</span> screenW : <span class="codeclass">float</span> = <span class="codeclass">Camera</span>.main.pixelWidth;
   <span class="codeclass">var</span> screenH : <span class="codeclass">float</span> = <span class="codeclass">Camera</span>.main.pixelHeight;

   <span class="codecomment">// Create an array consisting of two Vector2 object</span>
   <span class="codeclass">var</span> edgePoints: Vector2[] = <span class="codekeyword">new</span> Vector2[<span class="codenumber">2</span>];
   
   <span class="codecomment">// Convert screen coordinates point (0,0) to world coordinates</span>
   <span class="codeclass">var</span> leftBottom : <span class="codeclass">Vector3</span> = <span class="codeclass">Camera</span>.main.ScreenToWorldPoint(<span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(<span class="codenumber">0f</span>, <span class="codenumber">0f</span>, <span class="codenumber">0f</span>));      
   <span class="codecomment">// Convert screen coordinates point (0,H) to world coordinates</span>
   <span class="codeclass">var</span> leftTop : <span class="codeclass">Vector3</span> = <span class="codeclass">Camera</span>.main.ScreenToWorldPoint(<span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(<span class="codenumber">0f</span>, screenH, <span class="codenumber">0f</span>));      
            
   <span class="codecomment">// Set the two points in the array to screen left bottom</span>
   <span class="codecomment">// and screen left top points            </span>
   edgePoints[<span class="codenumber">0</span>] = leftBottom;
   edgePoints[<span class="codenumber">1</span>] = leftTop;
   
   <span class="codecomment">// Position the left wall edge collider</span>
   <span class="codecomment">// at the left edge of the camera</span>
   leftWall.points = edgePoints;

   <span class="codecomment">// Convert screen coordinates point (W,0) to world coordinates</span>
   <span class="codeclass">var</span> rightBottom : <span class="codeclass">Vector3</span> = <span class="codeclass">Camera</span>.main.ScreenToWorldPoint(<span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(screenW, <span class="codenumber">0f</span>, <span class="codenumber">0f</span>));      
   <span class="codecomment">// Convert screen coordinates point (W,H) to world coordinates</span>
   <span class="codeclass">var</span> rightTop : <span class="codeclass">Vector3</span> = <span class="codeclass">Camera</span>.main.ScreenToWorldPoint(<span class="codekeyword">new</span> <span class="codeclass">Vector3</span>(screenW, screenH, <span class="codenumber">0f</span>));      

   <span class="codecomment">// Set the two points in the array to screen right bottom</span>
   <span class="codecomment">// and screen right top points            </span>
   edgePoints[<span class="codenumber">0</span>] = rightBottom;
   edgePoints[<span class="codenumber">1</span>] = rightTop;

   <span class="codecomment">// Position the left wall edge collider</span>
   <span class="codecomment">// at the left edge of the camera</span>
   rightWall.points = edgePoints;
}

</div><span class="codecomment">// HUD</span>
<span class="codekeyword">function</span> OnGUI() {
   <span class="codecomment">// Show player score in white on the top left of the screen</span>
   <span class="codeclass">GUI</span>.color = <span class="codeclass">Color</span>.white;   
   <span class="codeclass">GUI</span>.skin.label.alignment = <span class="codeclass">TextAnchor</span>.UpperLeft;
   <span class="codeclass">GUI</span>.skin.label.fontSize = <span class="codenumber">40</span>;
   <span class="codeclass">GUI</span>.skin.label.fontStyle = <span class="codeclass">FontStyle</span>.Bold;
   <span class="codeclass">GUI</span>.Label(<span class="codekeyword">new</span> <span class="codeclass">Rect</span>(<span class="codenumber">20</span>,<span class="codenumber">20</span>,<span class="codenumber">500</span>,<span class="codenumber">100</span>), <span class="codestring">"Score: "</span> + GameMaster.playerScore);

   <span class="codecomment">// Show the player lives in red on the top right of the screen</span>
   <span class="codeclass">GUI</span>.color = <span class="codeclass">Color</span>.red;
   <span class="codeclass">GUI</span>.skin.label.alignment = <span class="codeclass">TextAnchor</span>.UpperRight;
   <span class="codeclass">GUI</span>.skin.label.fontSize = <span class="codenumber">40</span>;
   <span class="codeclass">GUI</span>.skin.label.fontStyle = <span class="codeclass">FontStyle</span>.Bold;
   <span class="codeclass">GUI</span>.Label(<span class="codekeyword">new</span> <span class="codeclass">Rect</span>(Screen.width - <span class="codenumber">320</span>,<span class="codenumber">20</span>,<span class="codenumber">300</span>,<span class="codenumber">100</span>), <span class="codestring">"Lives: "</span> + GameMaster.playerHealth);
}<div class="oldcode"></span></pre>	</div>	

	<p>The <em>OnGUI()</em> method will be invoked by the game engine a number of times per each frame.  In this implementation of the method, the built-in <span class="codeclass">GUI</span> class is used to display text on the screen using its <a href="http://docs.unity3d.com/ScriptReference/GUI.Label.html">Label()</a> method.  The look of the label is defined by changing the context of the <em>GUI</em> class before the call to the <em>Label()</em> method.  Position and size of the label are defined with the <span class="codeclass">Rect</span> object passed in to <em>Label()</em> as the first argument.  The text to display goes in as the second argument.  UnityScript concatenates strings with the "+" operator.  It also does automatic conversion from numbers to strings, which is why <tt>playerScore</tt> and <tt>playerHealth</tt> variables from <em>GameMaster</em> can be concatenated to strings with the "+".</p>
	
	<li>If you play the game, the score and number of lives should get displayed near the top of the screen.</li>
	
	<video class="blocks" width="640" height="480" controls> <!--autoplay="autoplay" loop>-->
	  	<source src="videos/lab02vid08.mp4" type="video/mp4">
  		<source src="videos/lab02vid08.webm" type="video/webm">
		Your browser does not support the video tag.
	</video> 
</ol>
</div>


<h3>Game over</h3>
<div class="block">
At the moment, once the player loses all lives or kills all the aliens, nothing happens.  Let's create a game over screen. 

	<ol class="toplist">
	
	<li>Start by creating a new scene.  From the main menu select <em>File | New Scene</em>.</li>
	
	<li>Save the scene into <em>Assets | Scenes</em> as "GameOver".</li>

	<li>Create a new Javascript in <em>Assets | Scripts</em>.  Name it <em>GameOverScript</em>.  Double-click to open in MonoDevelop and paste in the following code:<li>
	
	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/06/GameOverScript.js">GameOverScript.js</a></div>
	<pre><span class="codehash">#pragma strict</span>

<span class="codecomment">// Display game over message</span>
<span class="codekeyword">function</span> OnGUI() {

   <span class="codecomment">// Show player score in white on the top left of the screen</span>
   <span class="codeclass">GUI</span>.color = <span class="codeclass">Color</span>.white;   
   <span class="codeclass">GUI</span>.skin.label.alignment = <span class="codeclass">TextAnchor</span>.MiddleCenter;
   <span class="codeclass">GUI</span>.skin.label.fontSize = <span class="codenumber">40</span>;
   <span class="codeclass">GUI</span>.skin.label.fontStyle = <span class="codeclass">FontStyle</span>.Bold;
   <span class="codeclass">GUI</span>.Label(<span class="codekeyword">new</span> <span class="codeclass">Rect</span>(<span class="codenumber">0</span>,Screen.height/ <span class="codenumber">4f</span>,Screen.width,<span class="codenumber">70</span>), <span class="codestring">"Game over"</span>);

}</pre>	</div>	

	<p>In the OnGUI() method a label is displayed somewhere around the centre of the screen with "Game Over" as the text.</p>

	<li>In order for the <em>OnGUI()</em> method to get executed by the game engine, we need the script that implements it to be a component of a game object in the scene.  Instead of creating an object just for that purpose, let's just add the script to the "Main Camera" - it's a game object too.</li>

	<li>Add the <em>GameOverScript</em> script component to the <em>Main Camera</em> game object.</li>
	
	<li>You might also want to change the colour of the <em>Background</em> in the <em>Camera</em> properties of the <em>Main Camera</em> - I've set mine to black.</li>

	<li>Press run to see how the scene looks like.</li>

	<li>Press stop and don't forget to save the scene.</li>

	<li>So how do we load this scene from within the game?  There are two conditions for game over: when player has no more lives left, or when he/she shoots down all the aliens.  The <em>PlayerHit()</em> and <em>EnemyHit()</em> methods in the <em>GameMaster</em> script are ideal for detecting those conditions.   Edit the <em>GameMaster</em> script and add the following changes:</li>
	

	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/07/GameMaster.js">GameMaster.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

<span class="codecomment">// Static variables - there's only one instance</span>
<span class="codecomment">// of this variable for the entire game</span>

<span class="codecomment">// Player health - always start with 3 lives</span>
<span class="codekeyword">static</span> <span class="codeclass">var</span> playerHealth: int = <span class="codenumber">3</span>;
<span class="codecomment">// Player score</span>
<span class="codekeyword">static</span> <span class="codeclass">var</span> playerScore: int = <span class="codenumber">0</span>;

<span class="codekeyword">function</span> Awake () {
   <span class="codecomment">// Never destroy this object, even</span>
   <span class="codecomment">// when level is re-loaded</span>
   DontDestroyOnLoad(<span class="codekeyword">this</span>);
}

<span class="codecomment">// Method to call when enemy is hit</span>
<span class="codekeyword">static</span> <span class="codekeyword">function</span> EnemyHit(alien : AlienClass) {
   <span class="codecomment">// Add enemy points to player's score</span>
   playerScore += alien.points;
   
</div>   <span class="codecomment">// Get the reference to alien's parent, the wave object</span>
   <span class="codeclass">var</span> enemyWave : Transform;
   enemyWave = alien.transform.parent;
   
   <span class="codecomment">// Get an array of references to all children of the wave game object</span>
   <span class="codecomment">// who have an AlienClass component (so, we're looking for all the</span>
   <span class="codecomment">// aliens remaining in the wave)</span>
   <span class="codeclass">var</span> aliensLeft : Component[];
   aliensLeft = enemyWave.GetComponentsInChildren (AlienClass);
   <span class="codecomment">// If only one alien is left, that's the alien that just has been</span>
   <span class="codecomment">// hit and is about to be deleted...so no more aliens will be left</span>
   <span class="codekeyword">if</span>(aliensLeft.length <= <span class="codenumber">1</span>) {
      Application.LoadLevel(<span class="codestring">"GameOver"</span>);
   }   
<div class="oldcode">}

<span class="codecomment">// Method to call when player is hit</span>
<span class="codekeyword">static</span> <span class="codekeyword">function</span> PlayerHit() {
   playerHealth--;
   <span class="codecomment">// Reduce player's lives</span>
   <span class="codekeyword">if</span>(playerHealth > <span class="codenumber">0</span>) {
      <span class="codecomment">// If more lives left, then reload the</span>
      <span class="codecomment">// level </span>
      Application.LoadLevel(<span class="codestring">"Level1"</span>);
</div>   } <span class="codekeyword">else</span> {
      <span class="codecomment">//No more lives left, load the GameOver scene</span>
      Application.LoadLevel(<span class="codestring">"GameOver"</span>);
<div class="oldcode">   }
}</span></pre>	</div>	
	
	<p>Game over due to player running out of lives is easy.  All that is needed is a condition in <em>PlayerHit()</em> method detecting <tt>playerHealth</tt> going down to zero, at which point the "GameOver" scene is loaded.</p>
	
	<p>Game over due to all aliens being gone is a bit more complicated.  There's many ways of doing it.  In this script this is done by checking the number of <em>Alien</em>s still left in the wave.  When only single alien (the one that got hit and invoked the <em>EnemyHit()</em> method) is left, it's game over.  The reference to hit alien is passed in as an argument of the <em>EnemyHit()</em> method.  From its <tt>parent</tt> variable, the reference to the <em>EnemyWave</em> game object is recovered.  Calling the <a href="http://docs.unity3d.com/ScriptReference/Component.GetComponentsInChildren.html">GetComponetnsInChildren()</a> method of the <em>EnemyWave</em> game object returns an array with the list of all its children that have the <em>AlienClass</em> component.  The number of references in the resulting array corresponds to the number of <em>Alien</em>s left in the wave.  If all that's left is the currently hit alien, the "GameOver" scene is loaded.</p> 
		 
	<li>Let's test whether it works.  When you press the play button, Unity Editor runs the currently open scene, therefore you need to open "Level1" scene (by double-clicking it in <em>Assets | Scenes</em>) first.  Don't forget to save the "GameOver" scene before the new one is loaded.</li>

	<li>Play the game, and get killed three times (don't try to shoot all the aliens just yet - it takes too much time).  The new screen doesn't load. There should be an error message at the bottom of the Unity Editor window: "Level 'GameOver'(-1) couldn't be loaded because it has not been added to the build settings."  If you want see the message in detail go to the "Console" tab in the <em>Project panel</em>.</li>
	
	<img class="block" src="images/screen10.png" style="max-width:1068px;max-height:825px" title="GameOver script load error">
	
	<li>Whenever things don't work as expected, check for errors is the <em>Console</em>.  Turns out that in order to move between the scenes, you need to configure game's <em>Build Settings</em>.</li>
	
	<li>Go to <em>File | Build Settings</em>.  Press <em>Add current</em> to add "Level1" to <em>Scenes in the Build</em>.  To add "GameOver" scene, you can drag it form <em>Assets |Scenes</em> to the <em>Scenes in the Build</em> window. </li>
	
	<img class="block" src="images/screen11.png" style="max-width:546px;max-height:578px" title="Build settings">
	
	<li>Try playing (and dying three times) again.  This time the "GameOver" scene should load fine.</li>
	
	<li>It would be nice to have some kind of indication in the "GameOver" scene whether the player did well or not.  Add the following code to the <eM>GameOverScript</em>:</li>


	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/07/GameOverScript.js">GameOverScript.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

<span class="codecomment">// Display game over message</span>
<span class="codekeyword">function</span> OnGUI() {

   <span class="codecomment">// Show player score in white on the top left of the screen</span>
   <span class="codeclass">GUI</span>.color = <span class="codeclass">Color</span>.white;   
   <span class="codeclass">GUI</span>.skin.label.alignment = <span class="codeclass">TextAnchor</span>.MiddleCenter;
   <span class="codeclass">GUI</span>.skin.label.fontSize = <span class="codenumber">40</span>;
   <span class="codeclass">GUI</span>.skin.label.fontStyle = <span class="codeclass">FontStyle</span>.Bold;
   <span class="codeclass">GUI</span>.Label(<span class="codekeyword">new</span> <span class="codeclass">Rect</span>(<span class="codenumber">0</span>,Screen.height/ <span class="codenumber">4f</span>,Screen.width,<span class="codenumber">70</span>), <span class="codestring">"Game over"</span>);

</div>   <span class="codeclass">var</span> message : String;

   <span class="codecomment">// Check player's lives left...if more than 0,</span>
   <span class="codecomment">// then player won, otherwise the game was lost   </span>
   <span class="codecomment">// Generate appropriate final message</span>
   <span class="codekeyword">if</span>(GameMaster.playerHealth <= <span class="codenumber">0</span>) {
      <span class="codecomment">// The lost message will be shown in red</span>
      message = <span class="codestring">"You lost :("</span>;
      <span class="codeclass">GUI</span>.color = <span class="codeclass">Color</span>.red;   
   } <span class="codekeyword">else</span> {
      <span class="codecomment">// The won message will be shown in white</span>
      message = <span class="codestring">"You won!!!"</span>;
      <span class="codeclass">GUI</span>.color = <span class="codeclass">Color</span>.white;
   }      
   <span class="codecomment">// Show lost/won message</span>
   <span class="codeclass">GUI</span>.Label(<span class="codekeyword">new</span> <span class="codeclass">Rect</span>(<span class="codenumber">0</span>,Screen.height/ <span class="codenumber">4f</span> + <span class="codenumber">80f</span>,Screen.width,<span class="codenumber">70</span>), message);
<div class="oldcode">}</span></pre>	</div>	
	
	<p>This code displays additional text in the "GameOver" screen.  Depending on the value of <em>GameMaster</em>.<tt>playerHealth</tt> the text will indicate whether the game was won or lost.</p>
</ol>
</div>

<h3>Main menu</h3>
<div class="block">
Let's create a scene that will serve as the main menu.
<ol class="toplist">
	<li>Create a new scene.  Name it "MainMenu" and save to <em>Assets | Scenes</em>.</li>

	<li>Create a new Javascript.  Name it <em>MainMenuScript</em> and paste in the following code:</li>

	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/08/MainMenuScript.js">MainMenuScript.js</a></div>
	<pre><span class="codehash">#pragma strict</span>

<span class="codekeyword">function</span> Update() {
   <span class="codekeyword">if</span>(<span class="codeclass">Input</span>.anyKey) {
      <span class="codecomment">// Start the new game</span>
      
      <span class="codecomment">// Reset the player lives and</span>
      <span class="codecomment">// score</span>
      GameMaster.playerHealth = <span class="codenumber">3</span>;
      GameMaster.playerScore = <span class="codenumber">0</span>;
      <span class="codecomment">// Load the first level</span>
      Application.LoadLevel(<span class="codestring">"Level1"</span>);      
   }
}

<span class="codecomment">// Display main menu message</span>
<span class="codekeyword">function</span> OnGUI() {
   <span class="codeclass">GUI</span>.color = <span class="codeclass">Color</span>.white;   
   <span class="codeclass">GUI</span>.skin.label.alignment = <span class="codeclass">TextAnchor</span>.MiddleCenter;
   <span class="codeclass">GUI</span>.skin.label.fontSize = <span class="codenumber">40</span>;
   <span class="codeclass">GUI</span>.skin.label.fontStyle = <span class="codeclass">FontStyle</span>.Bold;
   <span class="codeclass">GUI</span>.Label(<span class="codekeyword">new</span> <span class="codeclass">Rect</span>(<span class="codenumber">0</span>,<span class="codenumber">0</span>,Screen.width,Screen.height), <span class="codestring">"Press any key to start"</span>);
}</pre>	</div>	

	<p>The <em>OnGUI()</em> method displays a message to "Press any key to continue...".  The <em>Update()</em> function check for key input and loads "Level1" once <a href="http://vimeo.com/37714632">any key</a> is hit.  Recall that the <em>GameMaster</em> singleton  does not get destroyed when new scenes are loaded, so player lives and score need to be reset before the game is started.</p>
	
	<li>Add the <en>MainMenuScript</em> component to the <em>Main Camera</em> in the "MainMenu" scene.  Change the <em>Background</em> of the <em>Main Camera</em> to black.</li>

	<li>In <em>File | Build Settings</em> make sure to add "MainMenu" (current scene) to <em>Scenes in Build</em>.  Drag the "MainMenu" scene to the top - it's the first scene to be loaded when game starts.</li>  

	<img class="block" src="images/screen12.png" style="max-width:546px;max-height:578px" title="Build settings">

	<li>Add the following code to the <em>GameOverScript</em>:</li>

	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/08/GameOverScript.js">GameOverScript.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

</div><span class="codekeyword">function</span> Update() {
   <span class="codekeyword">if</span>(<span class="codeclass">Input</span>.anyKey) {
      <span class="codecomment">// Go back to main menu</span>
      Application.LoadLevel(<span class="codestring">"MainMenu"</span>);      
   }
}
<div class="oldcode">
<span class="codecomment">// Display game over message</span>
<span class="codekeyword">function</span> OnGUI() {

   <span class="codecomment">// Show player score in white on the top left of the screen</span>
   <span class="codeclass">GUI</span>.color = <span class="codeclass">Color</span>.white;   
   <span class="codeclass">GUI</span>.skin.label.alignment = <span class="codeclass">TextAnchor</span>.MiddleCenter;
   <span class="codeclass">GUI</span>.skin.label.fontSize = <span class="codenumber">40</span>;
   <span class="codeclass">GUI</span>.skin.label.fontStyle = <span class="codeclass">FontStyle</span>.Bold;
   <span class="codeclass">GUI</span>.Label(<span class="codekeyword">new</span> <span class="codeclass">Rect</span>(<span class="codenumber">0</span>,Screen.height/ <span class="codenumber">4f</span>,Screen.width,<span class="codenumber">70</span>), <span class="codestring">"Game over"</span>);

   <span class="codeclass">var</span> message : String;

   <span class="codecomment">// Check player's lives left...if more than 0,</span>
   <span class="codecomment">// then player won, otherwise the game was lost   </span>
   <span class="codecomment">// Generate appropriate final message</span>
   <span class="codekeyword">if</span>(GameMaster.playerHealth <= <span class="codenumber">0</span>) {
      <span class="codecomment">// The lost message will be shown in red</span>
      message = <span class="codestring">"You lost :("</span>;
      <span class="codeclass">GUI</span>.color = <span class="codeclass">Color</span>.red;   
   } <span class="codekeyword">else</span> {
      <span class="codecomment">// The won message will be shown in white</span>
      message = <span class="codestring">"You won!!!"</span>;
      <span class="codeclass">GUI</span>.color = <span class="codeclass">Color</span>.white;
   }      
   <span class="codecomment">// Show lost/won message</span>
   <span class="codeclass">GUI</span>.Label(<span class="codekeyword">new</span> <span class="codeclass">Rect</span>(<span class="codenumber">0</span>,Screen.height/ <span class="codenumber">4f</span> + <span class="codenumber">80f</span>,Screen.width,<span class="codenumber">70</span>), message);
   
</div>   <span class="codecomment">// Last line will be shown in white</span>
   <span class="codeclass">GUI</span>.color = <span class="codeclass">Color</span>.white;
   <span class="codeclass">GUI</span>.Label(<span class="codekeyword">new</span> <span class="codeclass">Rect</span>(<span class="codenumber">0</span>,Screen.height/ <span class="codenumber">4f</span> + <span class="codenumber">240f</span>,Screen.width,<span class="codenumber">70</span>), <span class="codestring">"Press any key to continue..."</span>);   
<div class="oldcode">}</span></pre>	</div>	

	<p>The code adds the "Press any key to continue..." message to the "GameOver" scene.  The <em>Update()</em> method will load the "MainMenu" after user presses a key.</p>

</ol>
</div>

<h3>Sound</h3>

<div class="block">
Few more finishing touches - sound and music. 
<ol class="toplist">
	<li>In Unity Editor load the "Level1" scene.</li>
	
	<li>Add <em>Audio | Audio Source</em> component to the <em>LevelMaster</em> game object.  Set the <em>Audio Clip</em> property of the <em>Audio Source</em> component - there are two audio files in <em>Assets | Sounds</em>, so you should get two choices.  Use the <em>testloop</em> asset.  Enable <em>Loop</em> attribute and set <em>Volume</em> to 0.3.</li>
	
	<img class="block" src="images/screen13.png" style="max-width:1068px;max-height:825px" title="Background music">
	
	<li>Edit the <em>AttackClass</em> script and make the following changes:</li>
	
	<div class="codeblock">
	<div class="codeblocktitle"><a href="scripts/08/AttackClass.js">AttackClass.js</a></div>
	<pre><div class="oldcode"><span class="codehash">#pragma strict</span>

<span class="codecomment">// Variable storing projectile object</span>
<span class="codecomment">// prefab</span>
<span class="codeclass">var</span> shotPrefab : Transform;

<span class="codecomment">// Probability of auto-shoot (0 if</span>
<span class="codecomment">// no autoshoot)</span>
<span class="codeclass">var</span> autoShootProbability: <span class="codeclass">float</span>;

<span class="codecomment">// Cooldown time for firing</span>
<span class="codeclass">var</span> fireCooldownTime: <span class="codeclass">float</span>;

</div><span class="codecomment">// Variable storing a reference to an audio clip</span>
<span class="codeclass">var</span> shotSound: AudioClip = <span class="codeclass">null</span>;
<div class="oldcode">
<span class="codecomment">// Private variables (not visible in the Inspector panel)</span>

<span class="codecomment">// How much time is left until able to fire again </span>
<span class="codekeyword">private</span> <span class="codeclass">var</span> fireCooldownTimeLeft: <span class="codeclass">float</span> = <span class="codenumber">0</span>;

<span class="codecomment">// Per every frame...</span>
<span class="codekeyword">function</span> Update () {
   <span class="codecomment">// If still some time left until can fire again</span>
   <span class="codecomment">// reduce the time by the time since last</span>
   <span class="codecomment">// frame </span>
   <span class="codekeyword">if</span>(fireCooldownTimeLeft > <span class="codenumber">0</span>) {
      fireCooldownTimeLeft -= <span class="codeclass">Time</span>.deltaTime;
   }

   <span class="codecomment">// If auto-shoot probability is more than zero...</span>
   <span class="codekeyword">if</span>(autoShootProbability > <span class="codenumber">0</span>) {
      <span class="codecomment">// Generate number a random number between 0 and 1</span>
      <span class="codeclass">var</span> randomSample : <span class="codeclass">float</span> = Random.Range(<span class="codenumber">0f</span>, <span class="codenumber">1f</span>);
      <span class="codecomment">// If that random number is less than the </span>
      <span class="codecomment">// probability of shooting, then try to shoot</span>
      <span class="codekeyword">if</span>(randomSample < autoShootProbability) {
         Shoot();   
      }
   }
}

<span class="codecomment">// Method for firing a projectile</span>
<span class="codekeyword">function</span> Shoot() {
   <span class="codecomment">// Shoot only if the fire cooldown period</span>
   <span class="codecomment">// has expired</span>
   <span class="codekeyword">if</span>(fireCooldownTimeLeft <= <span class="codenumber">0</span>) {
      <span class="codecomment">// Create a projectile object from </span>
      <span class="codecomment">// the shot prefab</span>
      <span class="codeclass">var</span> shot = Instantiate(shotPrefab);
      <span class="codecomment">// Set the position of the projectile object</span>
      <span class="codecomment">// to the position of the firing game object</span>
       shot.position = transform.position;
      <span class="codecomment">// Set time left until next shot</span>
      <span class="codecomment">// to the cooldown time</span>
      fireCooldownTimeLeft = fireCooldownTime;   
</div>      
      <span class="codecomment">// Check if shotSound variable has been set...if yes,</span>
      <span class="codecomment">// then play it</span>
      <span class="codekeyword">if</span>(shotSound != <span class="codeclass">null</span>) {
         AudioSource.PlayClipAtPoint(shotSound, transform.position);      
      }
<div class="oldcode">   }
}</span></pre>	</div>	

	<p>Whenever the <em>Shoot()</em> method is invoked and the <tt>shotSound</tt> variable is not null (which it is by default), the referenced audio clip will by played.</p>
	
	<li>We want the shot sounds for the player shoots and not for alien bombs.  So we'll initialise the <em>Shot Sound</em> variable in the <em>AttackClass</em> script component of the <em>Player</em> game object, but not the <em>Alien</em> prefab.</li>
	
	<li>Select the <em>Player</em> game object and find its <em>AttackClass</em> component in the <strong>Inspector panel</strong>.  It should now list <em>Shot Sound</em> as one if its attributes.  If it doesn't, make sure you <em>AttackClass</em> has been saved with the changes made above).</li>

	<li>Drag the <em>laser</em> sound from <em>Assets | Sounds</em> onto the <em>Shot Sound</em> property of the <em>Player</em> object.</li>

	<img class="block" src="images/screen14.png" style="max-width:1068px;max-height:825px" title="Shot sounds">

	<li>That's it - we have music and shot sounds.</li>

</ol>
</div>


<h3>Build the final game</h3>
<div class="block">
The game is finished, what remains is to build the final product.  The beauty of Unity is that you can build for many different platforms.  Let's build a web version (like the one you've seen at the beginning of this tutorial).
<ol class="toplist">
	<li>Go to <em>File | Build Settings</em>.</li>
	
	<li>Select the <em>Web Player</em> platform.</li>
	
	<li>If you want to adjust the resolution of the built product, click on <em>Player Settings</em> button.  Expand the <em>Resolution</em> section in the <strong>Inspector panel</strong> and set it there (I've used 800x600).</li>
	
	<li>In the <em>Build Settings</em> window press the <em>Build</em> button.  You will need to select the location where you want to final game to go.  After that Unity will compile your game.</li>
	
	<li>For the <em>Web Player</em> platform, an html file is created with your game, so double-click it to play the game in the browser.</li>
	
</ol>
	<img class="block" src="images/phew.png" style="width:140px;height:128px;float: left;">
	<div style="clear: left;">Done.
</div>

```