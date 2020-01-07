# Speed-Type

Speed-Type is an addictive typing game that will have you typing until your hands hurt.

![Screen Shot 2020-01-05 at 5 07 53 PM](https://user-images.githubusercontent.com/43099538/71807275-c4accd80-301f-11ea-9542-fbb9f58d2071.png)

---

## Demo

[Have some fun. You deserve it.](http://speed-type.herokuapp.com/)

---

## Technologies
  + HTML/CSS
  + Javascript
  + Heroku
  
 ---
 
 ## About
 
Words will fall from the top and the goal is to get as high a score as possible, and to avoid letting any words touch the bottom of the screen. You have ten lives before you lose the game. The spawn rate, speed, and score per words increases as time goes on. 

As you play, you may notice that some words are different colors than others. Typing these words will not only score you points but also give you special skills that will appear on the left side of the screen. Typing these words will give you distinct advantages in your pursuit of a high score.
 
### Skills

![Screen Shot 2020-01-07 at 1 26 28 PM](https://user-images.githubusercontent.com/43099538/71930850-5b2cdc00-3151-11ea-8eb2-2008f5c88816.png)

When a skill name is typed and input into the game, we have to remove one instance of the skill from the GUI, remove one instance of the skill from the game object, and then execute the effect of said skill. The above function is called in every subsequent rendering of the game to make sure that the game is handling any input or change of skills during the game loop.

![Screen Shot 2020-01-07 at 1 25 33 PM](https://user-images.githubusercontent.com/43099538/71930784-333d7880-3151-11ea-9106-652f1d03ed4e.png)

I created separate callbacks for each particular skill that exists in the game so that adding future skills becomes an easier endeavor. 

Bombs will remove all word objects that exist within the game, thus clearing the GUI of words, while also increasing your score by a large amount.

Health will restore your lives back to 10. Although simple, this gives the game more depth in how and when these skills should be used.

Slow will not only decrease the gravity of the words currently on the board, but will also decrease the word speed assigned to the game object. This word speed is passed into every instance of a word object, meaning that all words that spawn after the skill is used will also have its gravity decreased. An ascynchronus callback is then put into place to restore the speed of all the word objects that exist within the game, and also restore the word speed that will be passed into word objects that will spawn after the skill is finished.

### Word Spawn Randomization

When the game is first initalized, I assigned a range to the game named "randomizer". 

Words spawn at a random rate based on whether there are no words currently on the board, or if the two random numbers within the game's "randomizer" range are equal to each other.


![Screen Shot 2020-01-07 at 1 14 35 PM](https://user-images.githubusercontent.com/43099538/71930127-e1e0b980-314f-11ea-9761-8f45e1e90638.png)

### Scaling of Difficulty, Points per Word, and Spawn Rate

When the game is first initalized, I called a recursive function that updates a timer that exists within the game object. 

In that same recursive function, I have two callbacks. One that updates difficulty and one that updates the score per word. In the difficulty callback, I have two more callbacks that will check the timer saved within the game object and will decrease the range of randomization that controls the spawn rate, as well as increasing the gravity so that the words fall faster. 
