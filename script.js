
		
		
		var body = ["head", "neck", "body", "face"];
		
		var roast = ["back of a", "crusty", "stank", "stale"];
		
		var word = ["cereal box", "corn chip", "donkey", "waffle"];
		
		
		
		var insult = {};
		insult.randomize = function()
		{
		 insult.randomBody = body[Math.floor(Math.random() * 4)];
		
		 insult.randomRoast = roast[Math.floor(Math.random() * 4)];
		
		 insult.randomWord = word[Math.floor(Math.random() * 4)];
		}
		
		
		insult.build = function() 
		{
		 insult.message = "Yo " +  insult.randomBody + " built like a " +  insult.randomRoast + " " +  insult.randomWord + " !!!";
		}
		
		
		insult.print = function() 
		{
		var openTag = "<h2 style = 'color:blue;'>"
		var closeTag = "</h1>"
		document.write(openTag + insult.message + closeTag);
		}
		
		
		insult.printBig = function() 
		{
		 var openTag = "<h1 style = 'color:red;'>"
		 var closeTag = "</h1>"
		 document.write(openTag + insult.message + closeTag);
		}
		
		
		insult.randomize();
		insult.build();
		insult.print();
		insult.printBig();