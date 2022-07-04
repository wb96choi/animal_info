



fetch('https://raw.githubusercontent.com/csslick/animal-mobile/main/animal-data.json')
    .then(function(res){
        return res.json(); // JSON 객체 변환
    })                
    .then(function(obj){
        // 최종 데이터 출력(object)
        // console.log(obj);
        let name = obj[0].name;
        let category = obj[0].category;
        let imgUrl = obj[0].imgUrl;

        // console.log(`name = ${name}`);
        // console.log(`category = ${category}`);

        for(let i = 0; i < obj.length; i++) {
            let html = `
                <div class="col">
                    <img src=${obj[i].imgUrl} alt="dog01">
                    <p class="name">${obj[i].name}</p>
                </div>    
            `
            $('.row').append(html);
        }

        
    
    
        // forEach() 반복문
        obj.forEach(function(animal){
            console.log(animal.name)
        });
    
    
    });
