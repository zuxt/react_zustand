import { create } from 'zustand';

export interface Employee {
  teamName: 'management' | 'vbs' | 'frontend' | 'backend' | '';
  userName: string;
  office: '101' | '102' | '104' | '';
  position: 'lead' | 'colead' | 'senior' | 'mid' | 'junior' | '';
}

export const useEmployeeStore = create<Employee>((set) => ({
  teamName: '',
  userName: '',
  office: '',
  position: '',
  addEmployee: () =>
    set((state) => ({
      teamName: state.teamName,
      userName: state.userName,
      office: state.office,
      position: state.position
    })),
  removeAll: () =>
    set({ teamName: '', userName: '', office: '', position: '' }),
  update: (name: string, value: typeof name) =>
    set((state) => ({ ...state, ...{ [name]: value } }))
}));