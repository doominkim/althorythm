class User {
    skills = [];
    skillBook;
    
    constructor(skillBook) {
        this.skillBook = skillBook;
    }
    
    learnSkill(skill) {
        if(skill in this.skillBook) {
            for(const needSkill of this.skillBook[skill]) {
                if(!this.skills.includes(needSkill)) {
                    return false;
                }
            }
            
            this.skills.push(skill)
            return true;
            
        } else {
            this.skills.push(skill)
            return true;
        }
    }
}

function solution(skill, skillTrees) {
    let answer = 0;
    skill = skill.split('')
    const skillBook = {}
    for(let i=0; i<skill.length; i++) {
        skillBook[skill[i]] = skill.slice(0, i)
    }

    SkillTreeLoop: for(let skillTree of skillTrees) {
        const user = new User(skillBook)
        for(const item of skillTree) {
            if(!user.learnSkill(item)) {
                continue SkillTreeLoop;
            }
        }
        answer++
    }
    
    return answer;
}