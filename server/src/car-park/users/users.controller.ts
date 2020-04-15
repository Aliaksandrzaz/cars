import { Body, Controller, Get, Param, Post } from "@nestjs/common"

import { CreateUserDto } from "./dto/create-user.dto"
import { UsersService } from "./users.service"
import { EditUserDto } from "./dto/edit-user.dto"

@Controller("/user")
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @Post("/create")
  createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body)
  }

  @Post("/create")
  editUser(@Body() body: EditUserDto) {
    return this.userService.editUser(body)
  }

  @Get("/:id")
  getUser(@Param() id: number) {
    return this.userService.getUser(id)
  }

  @Get("/")
  getAllUsers() {
    return this.userService.getAllUsers()
  }

}
