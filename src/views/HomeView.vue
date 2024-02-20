<template>
  <div class="min-h-screen flex relative lg:static surface-ground">
    <SideBar></SideBar>

    <div class="min-h-screen flex flex-column relative flex-auto">
      <div class="h-full p-5 flex flex-column flex-auto">
        <div class="flex-auto">
          <h1 class="px-2">People directory</h1>
          <div class="surface-ground py-2">
            <div class="surface-ground">
              <div class="grid">
                <div class="col-12 lg:col-4 p-3">
                  <CardItem :entity="'company'" :title="'Companies'" :database="database"
                    @update-company="onUpdateCompany($event)" @update-department="onUpdateDepartment($event)"></CardItem>
                </div>

                <div class="col-12 lg:col-4 p-3">
                  <CardItem :entity="'department'" :title="'Departments'" :database="database" :companyName="companyName"
                    @update-department="onUpdateDepartment($event)"></CardItem>
                </div>

                <div class="col-12 lg:col-4 p-3">
                  <CardItem :entity="'employee'" :title="'Employees'" :database="database" :companyName="companyName"
                    :departmentName="departmentName" @update-database="onUpdateDatabase($event)"></CardItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from "../components/CardItem.vue";
import SideBar from "../components/SideBar.vue";

export default {
  name: "HomeView",

  components: {
    CardItem,
    SideBar
  },

  beforeCreate() {
    if (sessionStorage.getItem('auth') != 'true') {
      this.$router.push({ path: 'login' });
    }
  },

  created() {
    this.database = {
      companies: [
        {
          name: "The Coca-Cola Company",
          departments: [
            {
              name: "Department A",
              employees: [
                { name: "John Doe 1" },
                { name: "John Doe 2" },
                { name: "John Doe 3" },
              ]
            },
            {
              name: "Department B",
              employees: [
                { name: "John Doe 4" },
                { name: "John Doe 5" },
              ]
            },
            {
              name: "Department C",
              employees: [
                { name: "John Doe 6" },
              ]
            }
          ]
        },
        {
          name: "PepsiCo",
          departments: [
            {
              name: "Department D",
              employees: [
                { name: "John Doe 7" },
                { name: "John Doe 8" },
                { name: "John Doe 9" },
              ]
            },
            {
              name: "Department E",
              employees: [
                { name: "John Doe 10" },
                { name: "John Doe 11" },
              ]
            },
            {
              name: "Department F",
              employees: [
                { name: "John Doe 12" },
              ]
            }
          ]
        },
        {
          name: "Jones Soda",
          departments: [
            {
              name: "Department G",
              employees: [
                { name: "John Doe 13" },
                { name: "John Doe 14" },
                { name: "John Doe 15" },
              ]
            },
            {
              name: "Department H",
              employees: [
                { name: "John Doe 16" },
                { name: "John Doe 17" },
              ]
            },
            {
              name: "Department I",
              employees: [
                { name: "John Doe 18" },
              ]
            }
          ]
        },
        {
          name: "Leading Brands",
          departments: [
            {
              name: "Department J",
              employees: [
                { name: "John Doe 19" },
                { name: "John Doe 20" },
                { name: "John Doe 21" },
              ]
            },
            {
              name: "Department K",
              employees: [
                { name: "John Doe 22" },
                { name: "John Doe 23" },
              ]
            },
            {
              name: "Department L",
              employees: [
                { name: "John Doe 24" },
              ]
            }
          ]
        },
        {
          name: "National Beverage",
          departments: [
            {
              name: "Department A",
              employees: [
                { name: "John Doe 1" },
                { name: "John Doe 2" },
                { name: "John Doe 3" },
              ]
            },
            {
              name: "Department B",
              employees: [
                { name: "John Doe 1" },
                { name: "John Doe 2" },
              ]
            },
            {
              name: "Department C",
              employees: [
                { name: "John Doe 1" },
              ]
            }
          ]
        },
      ],
    };
  },

  data() {
    return {
      database: {},
      companyName: "",
      departmentName: ""
    }
  },

  methods: {
    onUpdateCompany(name) {
      this.companyName = name;
    },

    onUpdateDepartment(name) {
      this.departmentName = name;
    },
    
    onUpdateDatabase(database) {
      this.database = database;
    },
  },
};
</script>
