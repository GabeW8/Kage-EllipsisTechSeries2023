new Vue({
    el: '#app',
    data: {
      searchQuery: '',
      jobs: [
        { title: 'Software Engineer' },
        { title: 'UX Designer' },
        { title: 'Data Analyst' },
        // Add more job listings here
      ],
      registration: {
        name: '',
        email: ''
      }
    },
    computed: {
      filteredJobs() {
        return this.jobs.filter(job => job.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
    },
    methods: {
      submitRegistration() {
        console.log('Registration submitted:', this.registration);
        this.registration.name = '';
        this.registration.email = '';
      }
    }
  });
  