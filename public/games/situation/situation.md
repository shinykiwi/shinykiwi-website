### My goals for the game
For this game, from a programming perspective I wanted to put lots of effort into the actual
mechanic of holding cards and manipulating them. I wanted it to feel smooth, intuitive and
satisfying with little direction to the player of how to use it. Probably 80% of the code
from the game is card mechanic related. I also really wanted to put to the test our playtest
feedback from The Lemon Game, which mostly consisted of the player not understanding how to
play the game, what the goal is, and how the controls worked.

### Challenges during development
On the technical side, there was a challenge at the start where I had created the card hand
in 3D space, which created two major problems: 1) getting the cards to overlay on the screen
in instead of clipping with the environment; 2) getting the cards to stay in a fixed
position on the screen despite having transformations amongst themselves. Although I’m sure
there is a proper solution to these, after giving it a solid day or so of work, I made the
executive decision with the interest of time to switch to a 2D UI overlay solution instead.

Thankfully much of the logic for the animations/transformations of the cards remained the
same, I just had to remove the Z-axis from the equation among some other minor things. The
animations and transformations of the card (like folding and unfolding your hand) when
combined with 3D first person movement did still pose some problems and created some
interesting bugs revealed during the playtest. Players who tend to speedrun or click
rapidly and move around quickly were the best testers because they revealed all kinds
of bugs like this. Cards scaling in odd ways, cards rotating correctly but in the wrong
position. There just needed to be more support for players to not play the game how I
did when developing. 

Further, for the first person who played our game in the playtest, some
of the
situations didn’t work so I had to fix that on the fly before the next person came. Then the
next person decided to combine 3 cards together which I hadn’t anticipated and we clearly
did not want. That I also fixed on the fly. So that’s why there was no message on the screen
to the effect of “You cannot combine a card that has already been combined” because I had
only just fixed it.

![miro-diagram](games/situation/miro-screenshot-situation-game.png)

### Things that went well

I think we were a bit nervous that players wouldn’t understand how to
play our game at all or what the goals were. To our surprise though, players took the time
to read the clipboard in the main menu that explained how to play the game. They then seemed
to understand their goals immediately and didn’t need much guidance from us. The movement,
picking up cards with left click, and toggling the card hand needed no explaining for
players.

I think especially toggling the card hand was done well because after a player
picks up a card, it brings up the hand and shows the card being added to the hand. Then
there’s some helper text that says the player can put away their hand by right clicking.
Players will likely move their mouse around which will teach the player that when you hover
over a card it will animate upwards, and clicking on a card “selects” it and a “Discard”
button appears. If the player selects another card, the “Combine” button will show. So just
by picking up a card, they are taught everything they need to know about what they can do
with cards.

I think this was very low-friction and was well done in terms of teaching the
player by them playing the game. I also think that in general this game was more polished
when it comes to glueing the whole game together. What I mean by that is the parts of the
game that maybe need to help the player a bit to understand, like when you leave the
classroom it asks if you are sure, and if you try to leave with more than 3 cards it will
tell the player that they have too many. We saw this in real-time helping players who either
didn’t read the clipboard or forgot the rules, to understand “Oh I can only leave with 3
cards”. Having a main menu and a pause menu also helped the experience have a bit less
friction for the player. Some improvements from last time like having the outline be a
standout colour (red) and having the reticule be much more visible helped too. I really
think we learned from our amazing playtest feedback from The Lemon Game and prioritized
player understanding with proper UI and guidance in this game and I think it paid off.

