
// This is a simple simulation of a database
// In a real application, this would be replaced with an actual database connection

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

class InMemoryDatabase {
  private contactMessages: ContactMessage[] = [];

  async saveContactMessage(data: Omit<ContactMessage, 'id' | 'createdAt'>): Promise<ContactMessage> {
    const newMessage: ContactMessage = {
      ...data,
      id: this.generateId(),
      createdAt: new Date()
    };
    
    this.contactMessages.push(newMessage);
    console.log('Message saved to database:', newMessage);
    return newMessage;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    // In a real app, you might have pagination, filtering, etc.
    return [...this.contactMessages];
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}

// Export a singleton instance
export const db = new InMemoryDatabase();
