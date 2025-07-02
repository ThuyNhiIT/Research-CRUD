<template>
  <div class="card">
    <Toast />
    <Toolbar>
      <template #start>
        <Button label="Thêm User" icon="pi pi-plus" @click="openCreateDialog" />
      </template>
    </Toolbar>

    <DataTable :value="users" dataKey="id" class="p-datatable-sm">
      <Column field="id" header="ID" />
      <Column field="name" header="Tên" />
      <Column field="email" header="Email" />
      <Column header="Hành động">
        <template #body="{ data }">
          <Button icon="pi pi-pencil" @click="editUser(data)" class="p-button-text p-button-sm" />
          <Button icon="pi pi-trash" severity="danger" @click="deleteUser(data.id)" class="p-button-text p-button-sm" />
        </template>
      </Column>
    </DataTable>

    <Dialog v-model:visible="showDialog" :header="isEdit ? 'Cập nhật User' : 'Thêm User'" :modal="true" :closable="false">
      <div class="p-fluid">
        <div class="field">
          <label for="name">Tên</label>
          <InputText id="name" v-model="form.name" />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <InputText id="email" v-model="form.email" />
        </div>
      </div>
      <template #footer>
        <Button label="Huỷ" @click="closeDialog" />
        <Button label="Lưu" @click="saveUser" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useToast } from 'primevue/usetoast'

const users = ref([])
const showDialog = ref(false)
const isEdit = ref(false)
const form = ref({ id: null, name: '', email: '' })
const toast = useToast()

const fetchUsers = async () => {
  const res = await axios.get('http://localhost:3000/api/users')
  users.value = res.data
}

const openCreateDialog = () => {
  isEdit.value = false
  form.value = { id: null, name: '', email: '' }
  showDialog.value = true
}

const editUser = (user: any) => {
  isEdit.value = true
  form.value = { ...user }
  showDialog.value = true
}

const saveUser = async () => {
  try {
    if (isEdit.value && form.value.id) {
      await axios.put(`http://localhost:3000/api/users/${form.value.id}`, form.value)
      toast.add({ severity: 'success', summary: 'Cập nhật thành công', life: 3000 })
    } else {
      await axios.post('http://localhost:3000/api/users', form.value)
      toast.add({ severity: 'success', summary: 'Thêm mới thành công', life: 3000 })
    }
    closeDialog()
    fetchUsers()
  } catch {
    toast.add({ severity: 'error', summary: 'Lỗi', detail: 'Không thể lưu', life: 3000 })
  }
}

const deleteUser = async (id: number) => {
  try {
    await axios.delete(`http://localhost:3000/api/users/${id}`)
    toast.add({ severity: 'info', summary: 'Đã xoá', life: 3000 })
    fetchUsers()
  } catch {
    toast.add({ severity: 'error', summary: 'Lỗi khi xoá', life: 3000 })
  }
}

const closeDialog = () => {
  showDialog.value = false
}

onMounted(fetchUsers)
</script>

<style scoped>
.card {
  padding: 2rem;
}
</style>
