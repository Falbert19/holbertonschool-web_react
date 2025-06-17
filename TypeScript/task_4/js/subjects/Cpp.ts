namespace Subjects {
    export interface Teacher {
        experiencieTeachingC: number;
}

export class Cpp extends Subject {
    getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
        if (this.teacher === undefined || this.teacher.experiencieTeachingC <= 0) {
            return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}