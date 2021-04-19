import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {ConfirmationDialogComponent} from '../../shared/confirmation-dialog/confirmation-dialog.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clientList: User[];
  modalRef: BsModalRef;
  roleAdmin: boolean;
  selectedUserId: any;

  constructor(private userService: UserService,
              public modalService: BsModalService) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        console.log(data[0].roles.some(e => e.name === 'ROLE_ADMIN'));
        console.log(data);
        this.clientList = data;
      }
    );
  }

  openConfirmationDialog(id) {
    this.modalRef = this.modalService.show(ConfirmationDialogComponent);
    this.modalRef.content.onClose.subscribe(
      result => {
        if (result) {
          this.userService.deleteUserById(id).subscribe(
            data => {
              alert('User deleted successfully');
              this.getAllUsers();
            },
            error => {
              alert('User could not be deleted');
            }
          );
        }
        console.log('results', result);
      });
  }

  public checkRoles(roles: any[]): boolean {
    return roles.some(role => role.name === 'ROLE_ADMIN');
  }
  onItemChange(value, id) {
    this.selectedUserId = id;
    if (value.checked) {
      this.roleAdmin = true;
    } else {
      this.roleAdmin = false;

    }
  }

  updateUserRoles(userId: number) {
    this.userService.updateUserRoles(userId, this.roleAdmin).subscribe(
      data => {
        this.getAllUsers();
        this.selectedUserId = null;
        alert('User Roles updated successfully');
      },
      error => {
        this.getAllUsers();
        this.selectedUserId = null;
        alert('User Roles could not be updated');
      }
    );
  }
}
