class TelaInicial {
    constructor(){
      
    }
    
    draw(){
     this._imagemDeFundo();
     this._texto();
     this._botao();
    }
    
    _imagemDeFundo(){
      image(imagemTelaInicial, 0, 0, width, height);
    }
    
    _texto(){
      textFont(fonteTelaInicial);
      textAlign(CENTER);
      fill('#FF69B4');
      textSize(50);
      text('A viagem Cyberpunk de', width / 2, height / 3 );
      textSize(150);
      text('Ket', width / 2, height / 5 * 3);
    }
    
    _botao(){
      botaoGerenciador.y = height / 7 * 5;
      botaoGerenciador.draw();
    }
  }