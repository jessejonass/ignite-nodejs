import { v4 as uuidv4 } from 'uuid';

class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    // create ID if it doesn't exist
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Category };
