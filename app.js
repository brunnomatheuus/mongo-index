const mongoose = require('mongoose');
let Doc;

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        Doc = mongoose.model('docs', { val1: Number, val2: Number });
        
        inserirDados();

        console.time('Buscando val1 sem indíce: ');
        Doc.find({ val1: { $gte:0 , $lt: 11 }}, (err, docs) => { 
            if ( err ) console.error(err)

            console.timeEnd('Buscando val1 sem indíce: ')

            console.log('Criando índice para val1')
            Doc.createIndexes({ val1: 1 }).then((res)=> {
                console.time('Buscando val1 com indíce: ');
                Doc.find({ val1: { $gte:0 , $lt: 11 }}, (err, docs) => { 
                    if ( err ) console.error(err)

                    console.timeEnd('Buscando val1 com indíce: ')

                    console.time('Buscando val1 com indíce e projeção: ');
                    Doc.find({ val1:{ $gte:0 , $lt: 11 }}, { val2: 0, _id: 0 }, (err, docs) => { 
                        if ( err ) console.error(err)
    
                        console.timeEnd('Buscando val1 com indíce e projeção: ');

                        mongoose.connection.db.dropCollection('docs', (err, result) => console.log(`Deletado: ${result}`) );
                        mongoose.connection.close()
                    });
                });
            }).catch((err) => console(err))
        });
    }).catch(e => console.log('Erro ao se conectar'));



function randomInt() {
    return (Math.floor(Math.random() * 100)) + 1;
}

inserirDados = () => {
    let lista = [];
    console.log('Inserindo!')
    console.time('Tempo de inserção: ');
    for (i = 0; i < 100; i++){
        for (j = 0; j < 100; j++){
            for(k = 0; k < 10; k++) {
                lista.push( new Doc({ val1: randomInt(), val2: randomInt() }) )
            }
        }
        Doc.collection.insertMany(lista, (err, docs)=> {
            if (err) {
                return console.error(err)
            }
        })
        while (lista.length > 0) {
            lista.pop();
        }
    }
    console.timeEnd('Tempo de inserção: ');
}