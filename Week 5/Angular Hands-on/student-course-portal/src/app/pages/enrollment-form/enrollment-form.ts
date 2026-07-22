import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css',
})
export class EnrollmentForm {
  student = {
    name: '',
    email: '',
    course: '',
  };

  onSubmit() {
    alert(
      `Enrollment Successful!\n\n` +
        `Name: ${this.student.name}\n` +
        `Email: ${this.student.email}\n` +
        `Course: ${this.student.course}`,
    );

    console.log(this.student);
  }
}
