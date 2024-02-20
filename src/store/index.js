import { createStore } from 'vuex'

export default createStore({
  state: {
    database: {
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
    }
  },

  getters: {
    getDatabase(state) {
      return state.database;
    }
  },

  mutations: {
    ADD_EMPLOYEE(state, data) {
      let companyIndex = state.database.companies.findIndex((company) => company.name == data.companyName);
      let departmentIndex = state.database.companies[companyIndex].departments
        .findIndex((department) => department.name == data.departmentName);
      state.database.companies[companyIndex].departments[departmentIndex].employees
        .push({ name: data.employeeName });
    },

    REMOVE_EMPLOYEE(state, data) {
      let companyIndex = state.database.companies.findIndex((company) => company.name == data.companyName);
      let departmentIndex = state.database.companies[companyIndex].departments
        .findIndex((department) => department.name == data.departmentName);
      let employeeIndex = state.database.companies[companyIndex].departments[departmentIndex].employees
        .findIndex((employee) => employee.name == data.selectedName);
      state.database.companies[companyIndex].departments[departmentIndex].employees
        .splice(employeeIndex, 1);
    },

    REMOVE_DEPARTMENT(state, data) {
      let companyIndex = state.database.companies.findIndex((company) => company.name == data.companyName);
      let departmentIndex = state.database.companies[companyIndex].departments
        .findIndex((department) => department.name == data.selectedName);
      state.database.companies[companyIndex].departments.splice(departmentIndex, 1);
    },

    REMOVE_COMPANY(state, data) {
      let companyIndex = state.database.companies.findIndex((company) => company.name == data.selectedName);
      state.database.companies.splice(companyIndex, 1);
    }
  }
})
