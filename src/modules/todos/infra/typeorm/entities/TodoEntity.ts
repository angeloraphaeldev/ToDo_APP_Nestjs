import { v4 as uuid } from 'uuid';

class TodoEntity {
  id: string;
  name: string;
  description: string;
  isChecked: boolean;
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { TodoEntity };
