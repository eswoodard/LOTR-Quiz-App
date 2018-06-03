const QUESTIONS = [
  {
    
    text: `Before Frodo, Sam, and Pippin leave the Shire they meet a company of Elves who scare off the Black Rider that was hunting them.  They stay with the Elves for the night and receive food and counsel.  Who was the leader of the company of Elves?`,
    options: [`Galadriel`, `Gildor`,`Glorfindel`, `Gil-Galed`],
    correctAnswer: `Gildor`,
    questionImage: `images/ALeeGildor.jpg`,
    imageAlt: `Frodo and Gildor`,
    feedbackQuote:  `‘I am Gildor,’ answered their leader, the Elf who had first hailed him.  ‘Gildor Inglorion of the House of Finrod.  We are Exiles, and most of our kindred have long ago departed and we too are now only tarrying a while, ere we return over the Great Sea…’`,
    quoteCitation: `The Lord of the Rings, Book 1, Chapter III, “Three is Company”`,
    
  },
  {
   
    text: `While Strider is leading Frodo and company to Rivendell, they spend the night beneath 3 large stone trolls.  One of the hobbits sings a song about an old Troll and a man named Tom.  Who sings it?`,
    options: [`Sam`,`Frodo`,`Pippin`, `Merry`],
    correctAnswer: `Sam`,
    questionImage: `images/ALeeTrolls.jpg`,
    imageAlt: `Trolls`,
    feedbackQuote: `‘I don’t know about that,’ said Sam.  ‘But how would this suit?  It ain’t what I call proper poetry, if you understand me: just a bit nonsense.  But these old images here brought it to my mind,’ Standing up, with his hands behind his back, as if he was at school, he began to sing to an old tune.`,
    quoteCitation: `The Lord of the Rings, Book 1, Chapter XII, “Flight to the Ford”`,
  },
  {
    
    text: `When the Fellowship arrives at the mines of Moria, they must use the password ‘Mellon!' to open the hidden Dwarven door.  What does ‘Mellon' mean in the Common Tongue?`,
    options: [ `Open`,`Enter`,`Danger`,`Friend`],
    correctAnswer: `Friend`,
    questionImage: `images/ALeeMoriaWall.jpg`,
    imageAlt: `Moria Gate`,
    feedbackQuote: `‘I was wrong after all,’ said Gandalf, ‘and Gimli too.  Merry, of all people, was on the right track.  The opening word was inscribed on the archway all the time!  The translation should have been “Say ‘Friend' and enter".  I had only to speak the Elvish word for friend and the doors opened.`,
    quoteCitation:`The Lord of the Rings, Book 2, Chapter IV, “A Journey in the Dark”`,
  },
      
  {
    
    text: `After the Fellowship leaves Lothlórien, they take a boat down the Anduin.  They must pass the two great statues of stone called the Argonath, the Pillars of the Kings. Who are the two Kings?`,
     options: [`Isildur and Anárion`,`Boromir and Faramir`,`Elrond and Elros`,`Théoden and Éomer`],
     correctAnswer: `Isildur and Anárion`,
     questionImage: `images/JHoweArganoth.jpg`,
     imageAlt: 'The Argonath',
     feedbackQuote: `‘Behold the Argonath, the Pillars of the Kings!’ cried Aragorn.  ‘We shall pass them soon…’<br> ‘Fear not!’ he said.  ‘Long have I desired to look upon the likenesses of Isildur and Anárion, my sires of old…'`,
     quoteCitation:  `The Lord of the Rings, Book 2, Chapter IX, “The Great River”`,
  },
  {
    
    text: `After Merry and Pippin escape from their captivity by the Orcs, they meet Treebeard, an Ent from Fangorn forest.  He tells them the tale of the Entwives.  What did he say happened to them?`,
    options: [`They were all killed by Sauron`,`They were lost and haven't been found`,`There were all captured`,`They are a myth and never really existed`],
    correctAnswer: `They were lost and haven't been found`,
    questionImage: `images/ALeeTreeBeardAlt.jpg`,
    imageAlt: `Treebeard`,
    feedbackQuote: `…‘There have been no Entings – no children, you would say, for a terrible long count of years.  You see, we lost the Entwives.’<br><br>  
      ‘How very sad!’ said Pippin, ‘How was it that they all died?’<br><br>
      ‘They did not die!’ said Treebeard. ‘I never said died.  We lost them, I said.  We lost them and we cannot find them.’`,
    quoteCitation: `The Lord of the Rings, Book 3, Chapter IV, “Treebeard”`,
  },
  {
  
    text: `When Gandolf, Aragorn, Gimili, and Legolas arrive in Edoras they see a “golden hall’ sitting atop a hill.  What is the name of that golden hall?`,
    options: [`Helm's Deep`,`Manthom House`,`Gar Ainion`,`Meduseld`],
    correctAnswer: `Meduseld`,
    questionImage: `images/ALeeEdoras.png`,
    imageAlt: `Edoras`,
    feedbackQuote: `‘Edoras these courts are called,’ said Gandalf, ‘and Meduseld is that golden hall.  There dwells Théoden son of Thengel, King of the Mark of Rohan.’ `,
    quoteCitation: `The Lord of the Rings, Book 3, Chapter VI, “The King of the Golden Hall.”`,
  },
  {
    
    text: `As Sam and Frodo make their way into Mordor, they are attacked by a giant spider, Shelob.  Who is Shelob descended from?`,
    options: [`Ungoliant`,`Thorondor`,`Morgoth`,`Sauron`],
    correctAnswer: `Ungoliant`,
    questionImage: `images/ALeeShelob.jpg`,
    imageAlt: 'Shelob',
    feedbackQuote: `There in the agelong she had dwelt, an evil thing in spider-form, even such as once of old had lived in the Land of the Elves in the West that is now under the Sea…Far and wide her lesser broods, bastards of the miserable mates, her own offspring, that she slew, spread from glen to glen…But none could rival her, Shelob the Great, last child of Ungoliant to trouble the unhappy world.  `,
    quoteCitation: `The Lord of the Rings, Book 4, Chapter IX, “Shelob's Lair”`,
  },
  {
    
    text: `Where does Gandalf take Pippin after he is caught handling the Palantir?`,
    options: [`Hobbiton`,`Minas Morgul`,`Minas Tirith`, `Osgiliath`],
    correctAnswer: `Minas Tirith`,
    questionImage: `images/ALeeMinasTirith.jpg`,
    imageAlt: 'Minas Tirith',
    feedbackQuote: `‘Sleep again, and do not be afraid!' said Gandalf. ‘For you are not going like Fordo to Mordor, but to Minas Tirith, and there you will be as safe as you can be anywhere in these days.  If Gondor falls, or the Ring is taken, then the Shire will be no refuge.'`,
    quoteCitation: `The Lord of the Rings, Book 5, Chapter I, “Minas Tirith”`,
  },
  {
    
    text: `When Frodo was captive in the tower of Cirith Ungol, how was Sam able to find him?`,
    options: [`By disguising himself as an orc`,`By putting on the One Ring and using it to find Frodo's location`,`By asking a Nazgul for directions`,`By singing a song`],
    correctAnswer: `By singing a song`,
    questionImage: `images/ALeeCirithUngol.jpg`,
    imageAlt: 'The Tower of Cirith Ungol',
    feedbackQuote: `‘I can hardly believe it,’ said Frodo, clutching him.  ‘There was an orc with a whip, and then it turns into Sam!  Then I wasn’t dreaming after all when I heard that singing down below, and I tried to answer.  Was it you?'<br><br> ‘It was indeed, Mr. Frodo.  I’d given up hope, almost.  I couldn’t find you.’`,
    quoteCitation: `The Lord of the Rings, Book 6, Chapter I, “The Tower of Cirith Ungol”`,

  },
  {
    
    text: `What last name did Aragorn take for his house after he became King of Gondor?`,
    options: [`Estel`,`Thorongil`,`Telcontar`,`Arathorn`],
    correctAnswer: `Telcontar`,
    questionImage: `images/ALeeWhiteTree.jpg`,
    imageAlt: `The White Tree of Gondor`,
    feedbackQuote: `And Aragorn hearing him, turned and said: ‘Verily, for in the high tongue of old I am Elessar, the Elfstone, and Envinyatar, the Renewer’: and he lifted from his breast the green stone that lay there.  ‘But Strider shall be the name of my house, if that be ever established.  In the high tongue it will not sound so ill, and Telcontar I will be and all the heirs of my body.'`,
    quoteCitation: `The Lord of the Rings, Book 5, Chapter VIII, “The Houses of Healing”`,
  },
  ];
  
    