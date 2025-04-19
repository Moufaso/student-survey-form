<template>
    <form autocomplete="on" @submit.prevent="submitForm">
        <!-- Participant Information -->
        <fieldset class="row g-3">
            <legend>Participant Information</legend>
            <div class="col-md-3">
                <label for="first_name" class="form-label required">Fist Name</label>
                <input type="text" class="form-control" name="first_name" id="first_name" placeholder="John" required autofocus v-model="form.first_name">
            </div>
            <div class="col-md-3">
                <label for="last_name" class="form-label required">Last Name</label>
                <input type="text" class="form-control" name="last_name" id="last_name" placeholder="Doe" required autofocus v-model="form.last_name">
            </div>
            <div class="col-md-6">
                <label for="address" class="form-label required">Address</label>
                <input type="text" class="form-control" name="address" id="address" placeholder="1234 Main St" required v-model="form.address">
            </div>
            <div class="col-md-2">
                <label for="city" class="form-label required">City</label>
                <input type="text" class="form-control" name="city" id="city" placeholder="Fairfax" required v-model="form.city">
            </div>
            <div class="col-md-2">
                <label for="state" class="form-label required">State</label>
                <input type="text" class="form-control" name="state" id="state" placeholder="VA" required v-model="form.state">
            </div>
            <div class="col-md-2">
                <label for="zip" class="form-label required">Zip</label>
                <input type="text" class="form-control" name="zip" id="zip" required placeholder="12345" v-model="form.zip">
            </div>
            <div class="col-md-2">
                <label for="tele" class="form-label required">Telephone</label>
                <input type="tel" class="form-control" name="tele" id="tele" required placeholder="12344567890" v-model="form.tele">
            </div>
            <div class="col-md-2">
                <label for="email" class="form-label required">Email</label>
                <input type="email" class="form-control" name="email" id="email" required placeholder="example@email.com" v-model="form.email">
            </div>
            <div class="col-md-2">
                <label for="date" class="form-label required">Date</label>
                <input type="date" class="form-control" name="date" id="date" required v-model="form.date">
            </div>
        </fieldset>
        <!-- Survey Questainare -->
        <fieldset class="row mb-3">
            <legend>Survey Questions</legend>
            <label class="required" name="liked" id="liked">What did you like most about the campus?<br>
                <label class="form-check-label"><input class="form-check-input" type="checkbox" name="liked" id="liked" value="students" v-model="form.liked"> Students</label>
                <label class="form-check-label"><input class="form-check-input" type="checkbox" name="liked" id="liked" value="location" v-model="form.liked"> Location</label>
                <label class="form-check-label"><input class="form-check-input" type="checkbox" name="liked" id="liked" value="campus" v-model="form.liked"> Campus</label>
                <label class="form-check-label"><input class="form-check-input" type="checkbox" name="liked" id="liked" value="atmosphere" v-model="form.liked"> Atmosphere</label>
                <label class="form-check-label"><input class="form-check-input" type="checkbox" name="liked" id="liked" value="dorm" v-model="form.liked"> Dorm Rooms</label>
                <label class="form-check-label"><input class="form-check-input" type="checkbox" name="liked" id="liked" value="sports" v-model="form.liked"> Sports</label>
            </label>

            <label class="required" name="interest" id="interest"> How did you become interested in Geroge Mason University?<br>
                <label class="form-check-label"><input class="form-check-input" type="radio" name="interest" id="interest" value="friends" v-model="form.interest">Friends</label>
                <label class="form-check-label"><input class="form-check-input" type="radio" name="interest" id="interest" value="television" v-model="form.interest">Televison</label>
                <label class="form-check-label"><input class="form-check-input" type="radio" name="interest" id="interest" value="internet" v-model="form.interest">Internet</label>
                <label class="form-check-label"><input class="form-check-input" type="radio" name="interest" id="interest" value="other" v-model="form.interest">Other</label>
            </label>

            <label>What is the likelyhood of you recommending this school to others?
                <div class="col-md-4">
                    <select class="form-select" name="likelihood" id="likelihood" required v-model="form.likelihood">
                        <option selected disabled value="">Choose...</option>
                        <option value="Very Likely">Very Likely</option>
                        <option value="Likely">Likely</option>
                        <option value="Unlikely">Unlikely</option>
                    </select>
                </div>
            </label>
        </fieldset>
        <!-- Additional Comments -->
        <fieldset class="row g-3 col-md-6">
            <legend>Additional Comments</legend>
            <textarea class=" form-control" name="comment" id="comment" placeholder="Enter your comments here..." style="height: 100px" v-model="form.comment"></textarea>
        </fieldset>
        <!-- Buttons -->
        <div class="buttons">
            <input class="button btn btn-primary" type="submit" value="Submit">
            <input class="button btn btn-primary" type="reset" value="Cancel">
        </div>
    </form>
</template>

<script>
import SurveyService from '../services/SurveyService.js';

export default {
    name: 'SurveyComponent',
    props: ['id'],
    data() {
        return {
            form: {
                first_name: '',
                last_name:'',
                address: '',
                city: '',
                state: '',
                zip: '',
                tele: '',
                email: '',
                date: '',
                liked: [],
                interest: '',
                likelihood: '',
                comment: ''
            }
        };
    },
    methods: {
        // Submit form
        submitForm() {
            this.form.liked = this.form.liked.join(', ');
            // Update survey
            if(this.id){
                SurveyService.updateSurvey(this.id, this.form);
                alert('Survey updated successfully');
            }
            // Post survey
            else{
                SurveyService.postSurvey(this.form);
                alert('Survey submitted successfully');
            }
            this.$router.push('/list').then(() => {
                window.location.reload();
            });
        }
    },
    created() {
        // If id is passed, fetch the survey data
        if(this.id) {
            SurveyService.getSurvey(this.id).then(response => {
                this.form = response.data;
                this.form.liked = this.form.liked.split(', ');
            });
        }
    }
}
</script>

<style scoped>
</style>
  