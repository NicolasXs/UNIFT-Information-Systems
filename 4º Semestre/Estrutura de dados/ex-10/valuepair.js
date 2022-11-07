class ValuePair{
    constructor(key, value, telefone){
        this.key = key;
        this.value = value;
        this.telefone = telefone;
    }
    
    toString(){
        return `[${this.key}:${this.value}:${this.telefone}]`;
    }
}