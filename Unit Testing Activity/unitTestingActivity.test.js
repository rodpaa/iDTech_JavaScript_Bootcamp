import greet from './greetings';
describe('test greet()',function (){
    it('shoul be called',function(){
    expect(greet('Elizabeth')).toBeCalled("Hi, Elizabeth!");
    });
});

describe('test greet()', function(){
    it('shoul handdle null',function(){
        expect(greet()).toBeCalled("Hello");
    });
});

describe('test greet()', function(){
    it('shoul handdle upper case',function(){
        expect(greet("JOSE")).toBeCalled("HELLO JOSE!");
    });
});

describe('test greet()', function(){
    it('shoul handdle multiple names',function(){
        expect(greet(["Jose","Pep"])).toBeCalled("Hello, Jose and Pep.");
    });
});

describe('test greet()', function(){
    it('shoul handdle multiple names',function(){
        expect(greet(["Alex","Arsene","Jose","Zidane"])).toBeCalled("Hello, Alex, Arsene, Jose, Zidane.");
    });
});