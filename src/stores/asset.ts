import { defineStore } from 'pinia';
import axios from 'axios';
import api from '../api/assets';
import User from '../layout/navBars/breadcrumb/user.vue';

// 定义数据项的类型
interface Item {
  order: number;
  assetcode: string;
  assetname: string;
  specification: string;
  category:string;
  unit:string
  unitprice:string
  IsRFID:boolean
  RFIDCardId:string
  StorageLocation:string
  Purchasingdate:string
  UserDepartment:string
  user:string
  StartTime:string
  CycleTime:string
  Supplier:string
  ContactPerson:string
  ContactInf:string
  AssetStatus:string
}

// 定义筛选条件的类型
interface Filter {
 assetcode:string
 user:string
 UserDepartment:string
}

interface SelectOption{
  value: string;
  label: string;
}

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    items: [] as Item[], // 存储从后端获取的数据
    filter: {
      assetcode:'',
      user:'',
      UserDepartment:''
    } as Filter,
    isDialogVisible: false,
    selectedRow: null as Filter | null,
    selectedValue: null as string | null,
  }),

  actions: {
    async fetchData() {
      try {
        const response = await api.getPosts(); // 替换为你的后端接口
        this.items = response.AssetsData;
        console.log(response);
        console.log(this.items);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    },

    setFilter(newFilter: Filter) {
      this.filter = {...newFilter};
    },

    resetFilter() {
        this.filter = {
          assetcode:'',
          user:'',
          UserDepartment:'',
        };
        console.log('Filter reset:', this.filter);
      },
  },

  getters: {
    filteredItems(state) {
      const { assetcode,user,UserDepartment } = state.filter;
      console.log('当前筛选条件:', state.filter);
      return state.items.filter(item => {
        return (
          (assetcode === '' || item.assetcode.includes(assetcode)) 
           &&(user === '' || item.user.includes(user))&&(UserDepartment===''||item.UserDepartment.includes(UserDepartment))
        //   (gender === '' || item.gender === gender)
        );
      });
    },
    uniqueCategories(state): SelectOption[] {
      const categories = new Set<string>();
      state.items.forEach(item => categories.add(item.UserDepartment));
      return Array.from(categories).map(category => ({
        value: category,
        label: category,
      }));
    },
  }
});

export const useDialogStore = defineStore('dialog', {
    state: () => ({
      isDialogVisible: false,
      selectedRow: null as any | null,
      currentView: 'details' as 'details' | 'edit',
    }),
    actions: {
      openDialog(row: any) {
        this.selectedRow = row;
        this.currentView = 'details'; // 默认视图类型
        this.isDialogVisible = true;
        console.log(this.isDialogVisible);
        
      },
      switchView(view: 'details' | 'edit') {
        this.currentView = view;
      },
      closeDialog() {
        this.isDialogVisible = false;
        console.log(this.isDialogVisible);
      },
    },
  });

  export const  useCreateDialogStore = defineStore('createdialog',{
    state:() => ({
      isDialogValue : false
    }),
    actions:{
      openDialog(){
        this.isDialogValue = true
      },
      closeDialog(){
        this.isDialogValue = false
      }

    }
  }

  )
