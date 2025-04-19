<template>
    <div class="container-fluid">
        <div class="row">
            <table class="col-lg table table-bordered" style="margin: 0.5vw;">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="survey in surveys" v-bind:key="survey.id">
                        <td>{{survey.first_name}}</td>
                        <td>{{survey.last_name}}</td>
                        <td>{{survey.email}}</td>
                        <td>{{survey.date}}</td>
                        <td>
                            <button class="button btn btn-primary" @click="updateSurvey(survey.id)">Update</button>
                            <button class="button btn btn-danger" @click="deleteSurvey(survey.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>    
        </div>
    </div>
</template>

<script>
import SurveyService from '../services/SurveyService.js';

export default {
    name: 'ListComponent',
    props: [],
    data() {
        return {
            surveys: []
        };
    },
    methods: {
        getSurveys() {
            SurveyService.getSurveys()
                .then(response => {
                    this.surveys = response.data;
                })
                .catch(error => {
                    alert('Error fetching surveys:', error);
                });
        },
        updateSurvey(id) {
            this.$router.push('/survey/' + id);
        },
        deleteSurvey(id) {
            SurveyService.deleteSurvey(id)
                .then(() => {
                    this.getSurveys();
                })
                .catch(error => {
                    alert('Error deleting survey:', error);
                });
        }
    },
    created() {
        this.getSurveys();
    }
}
</script>

<style scoped>
</style>