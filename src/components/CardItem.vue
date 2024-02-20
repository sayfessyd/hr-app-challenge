<template>
  <Transition>
    <div v-if="companyName != '' && entity == 'department' ||
      departmentName != '' && entity == 'employee' ||
      entity == 'company'" class="shadow-2 border-round surface-card flex-column justify-content-between flex">
      <div class="p-3 pb-0">
        <div class="flex align-items-center"><span class="text-900 font-bold">{{ title }}</span></div>
        <div class="mt-3 mb-3">
          <span class="p-input-icon-left">
            <i class="pi pi-search" style="font-size: 0.8rem; padding-top: 3px;"></i>
            <input class="p-inputtext p-component w-full text-sm" data-pc-name="inputtext" data-pc-section="root"
              type="text" :placeholder="`Search a ${entity}...`">
          </span>
        </div>
        <Listbox v-model="selectedItem" @change="updateSelectedItem()" :options="items" :tabindex="index"
          optionLabel="name" class="w-full border-none" listStyle="height:50vh">
          <template #option="slotProps">
            <div class="flex align-items-center">
              <Checkbox :modelValue="slotProps.option.name == selectedName" :binary="true" />
              <div class="ml-3">
                <p class="mt-0 mb-3">
                  {{ slotProps.option.name }}
                </p>
                <p v-if="entity != 'employee'" class="mt-0 mb-3 text-sm">
                  6 employees
                </p>
              </div>
            </div>
          </template>
        </Listbox>
      </div>

      <div class="px-4 py-3 surface-50 text-right">
        <Button label="Remove" severity="secondary" @click="deleteModalVisible = true" :disabled="selectedName == ''"
          outlined />
        <Button v-if="entity == 'employee'" type="button" label="New employee" icon="pi pi-plus" class="ml-3"
          @click="showAddModal()" />
      </div>
    </div>
  </Transition>

  <Dialog v-model:visible="addModalVisible" modal header="Add employee" :style="{ width: '50rem' }">
    <div class="grid formgrid p-fluid">
      <div class="field mb-4 col-12 md:col-6">
        <div>
          <h3>Personnal informations</h3>
        </div>
      </div>
      <div class="field mb-4 col-12 md:col-6">
        <div>
          <h3>Professionnal informations</h3>
        </div>
      </div>
      <div class="field mb-4 col-12 md:col-6">
        <div>
          <label for="name" class="block mb-2">Name</label>
          <InputText v-model="employeeName" id="name" class="flex-auto" autocomplete="off" />
        </div>
      </div>
      <div class="field mb-4 col-12 md:col-6">
        <div>
          <label for="title" class="block mb-2">Title</label>
          <InputText id="title" class="flex-auto" autocomplete="off" disabled />
        </div>
      </div>
      <div class="field mb-4 col-12 md:col-6">
        <div>
          <label for="Email" class="block mb-2">Email</label>
          <InputText id="Email" class="flex-auto" autocomplete="off" disabled />
        </div>
      </div>
      <div class="field mb-4 col-12 md:col-6">
        <div>
          <label for="company" class="block mb-2">Company</label>
          <Dropdown :modelValue="companyName" :options="[companyName]" placeholder="Select a Company" />
        </div>
      </div>
      <div class="field mb-4 col-12 md:col-6">
        <div>
          <label for="phone" class="block mb-2">Phone</label>
          <InputText id="phone" class="flex-auto" autocomplete="off" disabled />
        </div>
      </div>
      <div class="field mb-4 col-12 md:col-6">
        <div>
          <label for="department" class="block mb-2">Department</label>
          <Dropdown :modelValue="departmentName" :options="[departmentName]" placeholder="Select a Department" />
        </div>
      </div>
      <div class="field mb-4 col-12 md:col-6">
        <div>
          <label for="celphone" class="block mb-2">Celphone</label>
          <InputText id="celphone" class="flex-auto" autocomplete="off" disabled />
        </div>
      </div>
      <div class="field mb-4 col-12 md:col-6">
        <div>
          <label for="startdate" class="block mb-2">Start date</label>
          <Calendar v-model="startdate" id="startdate" />
        </div>
      </div>
      <div class="field mb-4 col-12 md:col-6">
        <div>
          <label for="location" class="block mb-2">Location</label>
          <InputText id="location" class="flex-auto" autocomplete="off" disabled />
        </div>
      </div>
      <div class="field mb-4 col-12 md:col-6">
        <div>
          <label for="enddate" class="block mb-2">End date</label>
          <Calendar v-model="enddate" id="enddate" />
        </div>
      </div>
    </div>
    <div class="flex justify-content-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="addModalVisible = false"></Button>
      <Button type="button" label="Save" @click="addEmployee()"></Button>
    </div>
  </Dialog>

  <Dialog v-model:visible="deleteModalVisible" modal :header="`Are you sure to delete this ${entity}?`"
    :style="{ width: '25rem' }">
    <span class="p-text-secondary block mb-5">This action is irreversible</span>
    <div class="flex justify-content-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="deleteModalVisible = false"></Button>
      <Button type="button" label="Delete" severity="danger" @click="deleteModel()"></Button>
    </div>
  </Dialog>
</template>

<script>
import { ref, isProxy, toRaw } from "vue";
export default {
  name: 'CardItem',

  created() {
    this.refresh();
  },

  props: {
    title: String,
    entity: String,
    database: Object,
    companyName: String,
    departmentName: String
  },

  watch: {
    companyName: function () {
      this.refresh();
    },
    departmentName: function () {
      this.refresh();
    },
  },

  data() {
    return {
      rawDatabase: {},
      items: [],
      selectedItem: ref(),
      selectedName: '',
      addModalVisible: false,
      deleteModalVisible: false,
      employeeName: ''
    }
  },

  methods: {
    refresh() {
      let list = [];
      if (isProxy(this.database)) {
        this.rawDatabase = toRaw(this.database);
      }

      if (this.rawDatabase) {
        if (this.entity == "company") {
          list = this.rawDatabase.companies;

        } else if (this.entity == "department") {
          let companies = this.rawDatabase.companies.filter(company => company.name == this.companyName);
          if (companies.length > 0) {
            list = companies[0].departments;
          }

        } else if (this.entity == "employee") {
          let companies = this.rawDatabase.companies.filter(company => company.name == this.companyName);
          if (companies.length > 0) {
            let departments = companies[0].departments.filter(department => department.name == this.departmentName);
            if (departments.length > 0) {
              list = departments[0].employees;
            }
          }
        }
      }
      this.items = ref(list);
    },

    updateSelectedItem() {
      this.selectedName = this.selectedItem != null ? this.selectedItem.name : '';
      if (this.entity == "company") {
        this.$emit("update-company", this.selectedName);
        this.$emit("update-department", '');
      }
      if (this.entity == "department") {
        this.$emit("update-department", this.selectedName);
      }
    },

    addEmployee() {
      if (this.employeeName != '') {
        let companyIndex = this.rawDatabase.companies.findIndex((company) => company.name == this.companyName);
        let departmentIndex = this.rawDatabase.companies[companyIndex].departments
                                  .findIndex((department) => department.name == this.departmentName);
        this.rawDatabase.companies[companyIndex].departments[departmentIndex].employees
            .push({ name: this.employeeName });

        this.$emit("update-database", this.rawDatabase);
        this.addModalVisible = false;
      }
    },

    deleteModel() {
      if (this.entity == 'company') {
        let companyIndex = this.rawDatabase.companies.findIndex((company) => company.name == this.selectedName);
        this.rawDatabase.companies.splice(companyIndex, 1);

        this.$emit("update-department", '');
        this.$emit("update-company", '');

      } else if (this.entity == 'department') {
        let companyIndex = this.rawDatabase.companies.findIndex((company) => company.name == this.companyName);
        let departmentIndex = this.rawDatabase.companies[companyIndex].departments
                                  .findIndex((department) => department.name == this.selectedName);
        this.rawDatabase.companies[companyIndex].departments.splice(departmentIndex, 1);

        this.$emit("update-department", '');

      } else if (this.entity == 'employee') {
        let companyIndex = this.rawDatabase.companies.findIndex((company) => company.name == this.companyName);
        let departmentIndex = this.rawDatabase.companies[companyIndex].departments
                                  .findIndex((department) => department.name == this.departmentName);
        let employeeIndex = this.rawDatabase.companies[companyIndex].departments[departmentIndex].employees
                                .findIndex((employee) => employee.name == this.selectedName);
        this.rawDatabase.companies[companyIndex].departments[departmentIndex].employees
            .splice(employeeIndex, 1);
      }

      this.$emit("update-database", this.rawDatabase);
      this.deleteModalVisible = false;
    },

    showAddModal() {
      this.addModalVisible = true;
      this.employeeName = '';
    }
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

