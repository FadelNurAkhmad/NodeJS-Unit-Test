import { UserRepository } from "./user-repository.js";

export class UserService {
  constructor(userRepository) {
    if (userRepository) {
      this.userRepository = userRepository; // memanggil class UserRepository
    } else {
      this.userRepository = new UserRepository(); // membuat class UserRepository apabila tidak ada
    }
  }

  save(user) {
    this.userRepository.save(user);
  }

  findById(id) {
    return this.userRepository.findById(id);
  }

  findAll() {
    return this.userRepository.findAll();
  }
}
