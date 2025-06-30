const enum RuleKey {
    name = 'name',
    type = 'type',
    color = 'color'
}

function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let count = 0;
    for(const item of items) {
        switch(ruleKey) {
            // name
            case RuleKey.name:
                if(ruleValue === item[2]) {
                    count++;
                }
            // type
                break;
            case RuleKey.type:
                if(ruleValue === item[0]) {
                    count++;
                }
                break;
            // color
            case RuleKey.color:
                if(ruleValue === item[1]) {
                    count++;
                }
                break;
        }
    }
    
    return count;
};