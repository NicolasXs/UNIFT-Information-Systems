class Dictionary{
    constructor(toStrFn = this.defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }
    defaultToString(item){
        if (item=== null){
            return 'NULL';
        }else if(item===undefined){
            return 'UNDEFINED';
        }else if(typeof item === 'string'|| item instanceof String){
            return `${item}`;
        }
        return item.toString();
    }

    hasKey(key){
        return this.table[this.toStrFn(key)]!= null;
    };

    set(key, value, telefone){
        if(key!=null && value!=null){
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value, telefone);
            return true;
        }
        return false;
    };
    remove(key){
       if(this.hasKey(key)){
        delete this.table[this.toStrFn(key)];
        return true;
       } 
       return false;
    };
    get(key){
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    };

    get2(key){
        if(this.hasKey(key)){
            return this.table[this.toStrFn(key)];
        }
        return undefined;
    }

    clear(){
        this.table = {};
    };
    size(){
        return Object.keys(this.table).length;
    };
    isEmpty(){
        return this.size() === 0;
    };

    keys(){
        return this.keyValues().map(valuePair => valuePair.key);
    };
    values(){
        return this.keyValues().map(valuePair => valuePair.value);
    };
    telefone(){
        return this.keyValues().map(valuePair => valuePair.telefone);
    };
    keyValues(){
        return Object.values(this.table);
    };
    
    forEach(callbackFn){
        const valuePairs = this.keyValues();
        for (let i = 0; i< valuePairs.length; i++){
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value, valuePairs[i].telefone);
            if (result === false){
                break;
            }
        }
    };

    toString(){
        if(this.isEmpty()){
            return '';
        }
        const valuePairs = this.keysValues();
        let objString = `${valuePairs[0].toString()}`;
        for(let i = 1; i<valuePairs.length;i++){
            objString = `${objString}, ${valuePairs[i].toString()}`;
        }
        return objString;
    };
}