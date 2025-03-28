// src/UserDirectory.ts

// Define interfaces for User and Address
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    roles: string[];
  }
  
  interface Address {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }
  
  // Create an enum for UserType
  enum UserType {
    Admin = 'Admin',
    Manager = 'Manager',
    Employee = 'Employee'
  }
  
  // Implement a createUser function
  function createUser(
    id: number,
    name: string,
    email: string,
    isActive: boolean = true,
    roles: string[] = []
  ): User {
    return { id, name, email, isActive, roles };
  }
  
  // Create a UserManager class
  class UserManager {
    private users: User[] = [];
  
    public addUser(user: User): void {
      this.users.push(user);
    }
  
    public getUser(id: number): User | undefined {
      return this.users.find(user => user.id === id);
    }
  
    public getAllUsers(): User[] {
      return this.users;
    }
  }
  
  // Implement a generic filterUsers function
  function filterUsers<K extends keyof User>(
    users: User[],
    key: K,
    value: User[K]
  ): User[] {
    return users.filter(user => user[key] === value);
  }
  
  // Create a UserSummary type alias
  type UserSummary = Pick<User, 'name' | 'email'>;
  
  // Example usage
  const userManager = new UserManager();
  const user1 = createUser(1, 'John Doe', 'john.doe@example.com', true, ['Admin']);
  const user2 = createUser(2, 'Jane Smith', 'jane.smith@example.com', false, ['Employee']);
  
  userManager.addUser(user1);
  userManager.addUser(user2);
  
  console.log(userManager.getAllUsers());
  console.log(filterUsers(userManager.getAllUsers(), 'isActive', true));
 
  // Example UserSummary usage
  const summary: UserSummary = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };
  
  console.log(summary);
  