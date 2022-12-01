

		
        var i = 1;
		while(i <= 50) {
			var b = parseInt( i / 10);
			var c = i % 10;
			var count = 0;
			console.log("[십 : %d] [일 : %d] [결과] ", b , c);
			if(b == 3 || b == 6 || b == 9) {
				count += 1;
			}
			if(c == 3 || c == 6 || c == 9) {
				count += 1;
			}
			if(count == 2) {
				console.log("짝짝");
			}else if(count == 1) {
				console.log("짝");
			}else {
				console.log(i);
			}
			
			
			i = i + 1;
		}
