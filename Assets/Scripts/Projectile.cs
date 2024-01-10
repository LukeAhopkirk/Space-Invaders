using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Projectile : MonoBehaviour
{

    // The speed fo the projectile
    public float speed;

    // Flag identifying whether the projectile
    // is sent by enemy or the player
    public bool enemyProjectile;

    // Update is called once per frame
    void Update()
    {
        // The projectile travels up (in the direction of positive y axis), but
        // the movement is multiplies by speed (so negative speed will get 
        // move the projectile down)
        transform.Translate(Vector3.up * speed * Time.deltaTime);
    }
}