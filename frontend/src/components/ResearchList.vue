<template>
  <div class="card">
    <Toolbar>
      <template #start>
        <Button label="Thêm Research" icon="pi pi-plus" @click="openNewDialog" />
      </template>
    </Toolbar>

    <DataTable :value="researches" dataKey="id">
      <Column field="id" header="ID" />
      <Column field="title" header="Tiêu đề" />
      <Column field="description" header="Mô tả" />
      <Column field="User.name" header="Người tạo" />
      <Column header="Hành động">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" class="mr-3" @click="editResearch(slotProps.data)" />
          <Button icon="pi pi-trash" severity="danger" @click="deleteResearch(slotProps.data.id)" />
        </template>
      </Column>
    </DataTable>

    <Dialog v-model:visible="showDialog" :header="editingId ? 'Cập nhật Research' : 'Thêm Research'" :modal="true">
      <div class="p-fluid">
        <div class="field">
          <label for="title">Tiêu đề</label>
          <InputText id="title" v-model="newResearch.title" />
        </div>
        <div class="field">
          <label for="description">Mô tả</label>
          <InputText id="description" v-model="newResearch.description" />
        </div>
        <div class="field">
          <label for="userId">Người tạo</label>
          <Dropdown id="userId" :options="users" optionLabel="name" optionValue="id" v-model="newResearch.userId" placeholder="Chọn user" />
        </div>
      </div>
      <template #footer>
        <Button label="Huỷ" @click="closeDialog" />
        <Button label="Lưu" @click="saveResearch" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useToast } from 'primevue/usetoast'

const researches = ref([])
const users = ref([])
const showDialog = ref(false)
const editingId = ref<number | null>(null)
const toast = useToast()

const newResearch = ref({
  title: '',
  description: '',
  userId: null
})

const fetchResearches = async () => {
  const res = await axios.get('http://localhost:3000/api/research')
  researches.value = res.data
}

const fetchUsers = async () => {
  const res = await axios.get('http://localhost:3000/api/users')
  users.value = res.data
}

const openNewDialog = () => {
  editingId.value = null
  newResearch.value = { title: '', description: '', userId: null }
  showDialog.value = true
}

const closeDialog = () => {
  showDialog.value = false
  newResearch.value = { title: '', description: '', userId: null }
  editingId.value = null
}

const editResearch = (research: any) => {
  newResearch.value = {
    title: research.title,
    description: research.description,
    userId: research.userId
  }
  editingId.value = research.id
  showDialog.value = true
}

const saveResearch = async () => {
  if (editingId.value) {
    await axios.put(`http://localhost:3000/api/research/${editingId.value}`, newResearch.value)
    toast.add({ severity: 'success', summary: 'Đã cập nhật', detail: 'Research đã được cập nhật', life: 3000 })
  } else {
    await axios.post('http://localhost:3000/api/research', newResearch.value)
    toast.add({ severity: 'success', summary: 'Thành công', detail: 'Đã thêm research', life: 3000 })
  }

  closeDialog()
  fetchResearches()
}

const deleteResearch = async (id: number) => {
  await axios.delete(`http://localhost:3000/api/research/${id}`)
  fetchResearches()
  toast.add({ severity: 'info', summary: 'Đã xoá', detail: 'Research đã bị xoá', life: 3000 })
}

onMounted(() => {
  fetchResearches()
  fetchUsers()
})
</script>

<style scoped>
.card {
  padding: 2rem;
}
</style>
