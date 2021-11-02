import React, { createContext, Component } from 'react';
import { withRouter } from 'react-router-dom';
import Geocode from 'react-geocode';
import axios from './axios';

export const StepperDataContext = createContext();

class StepperDataContextProvider extends Component {
  state = {
    loader: false,
    showErroModal: false,
    errorMsg: '',
    OpenTvStand: false,
    nameTvStand: '',
    shareholders: [{ name: '' }],

    finalStepForm: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      cardNumber: '',
      expiry: '',
      expiry_month: '',
      expiry_year: '',
      cvc: ''
    },

    cities: [],
    livingRoom: '',
    diningRoom: '',
    bedRoom: '',
    misc: '',
    kitchen: '',
    itemsValid: true,

    customerId: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerBussinessName: '',
    customerBusinessPhone: '',

    from: '',
    to: '',
    fromLatitude: '',
    fromLongitude: '',
    toLatitude: '',
    toLongitude: '',
    date: new Date(),
    time: new Date(),
    orderId: '',

    totalPrice: 0,

    bookNowFrom: '',
    bookNowTo: '',
    bookNowdate: '',

    moveFrom: '',
    moveFromElevator: false,
    moveToElevator: false,
    moveTo: '',
    loadingDock: '',
    doorRemoval: '',

    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactBusinessName: '',
    contactDate: new Date(),

    specificationMessagae: '',

    title: 'TV',

    OpenArmchair: false,
    nameArmchair: '',

    OpenFuton: false,
    nameFuton: '',

    OpenTV: false,
    nameTV: '',

    OpenSofa: false,
    nameSofa: '',

    OpenLoveSeat: false,
    nameLoveSeat: '',

    OpenSofaLShape: false,
    nameSofaLShape: '',

    OpenOttoman: false,
    nameOttoman: '',

    OpenReclinableChairs: false,
    nameReclinableChairs: '',

    OpenCornerTables: false,
    nameCornerTables: '',

    OpenCoffeeTables: false,
    nameCoffeeTables: '',

    OpenDecorativeTables: false,
    nameDecorativeTables: '',

    OpenDiningRoomTables: false,
    nameDiningRoomTables: '',

    OpenDiningRoomChairs: false,
    nameDiningRoomChairs: '',

    OpenBeds: false,
    nameBeds: '',

    OpenNightstandTables: false,
    nameNightstandTables: '',

    OpenChest: false,
    nameChest: '',

    OpenDresser: false,
    nameDresser: '',

    OpenFrames: false,
    nameFrames: '',

    OpenAreaRugs: false,
    nameAreaRugs: '',

    OpenLamps: false,
    nameLamps: '',

    OpenCeilingFans: false,
    nameCeilingFans: '',

    OpenDesks: false,
    nameDesks: '',

    OpenWindowAirConditionerUnits: false,
    nameWindowAirConditionerUnits: '',

    OpenWindowPackAirConditionerUnits: false,
    nameDresser: '',

    OpenInverterUnits: false,
    nameInverterUnits: '',

    OpenInverterUnitCompressors: false,
    nameInverterUnitCompressors: '',

    OpenBoxes: false,
    nameBoxes: '',

    OpenPoolTable: false,
    namePoolTable: '',

    OpenPingPongTable: false,
    namePingPongTable: '',

    OpenOutdoorBBQGrill: false,
    nameOutdoorBBQGrill: '',

    OpenFishTanks: false,
    nameFishTanks: '',

    OpenDogHouses: false,
    nameDogHouses: '',

    OpenOfficeChairs: false,
    nameOfficeChairs: '',

    OpenFlowerPots: false,
    nameFlowerPots: '',

    OpenGYMEquipments: false,
    nameGYMEquipments: '',

    OpenBenches: false,
    nameBenches: '',

    OpenBookCases: false,
    nameBookCases: '',

    OpenSculptures: false,
    nameSculptures: '',

    OpenMirrors: false,
    nameMirrors: '',

    OpenDesktopComputers: false,
    nameDesktopComputers: '',

    OpenGasTanks: false,
    nameGasTanks: '',

    OpenTVWallMounts: false,
    nameTVWallMounts: '',

    OpenRefrigerators: false,
    nameRefrigerators: '',

    OpenStoves: false,
    nameStoves: '',

    OpenDryers: false,
    nameDryers: '',

    OpenWashers: false,
    nameWashers: '',

    OpenDryerAndWasherCombos: false,
    nameDryerAndWasherCombos: '',

    OpenMicrowaveOvens: false,
    nameMicrowaveOvens: '',

    OpenDishwashers: false,
    nameDishwashers: '',

    OpenWineCoolers: false,
    nameWineCoolers: '',

    OpenToasterOvens: false,
    nameToasterOvens: '',

    OpenIndoorGrills: false,
    nameIndoorGrills: '',

    OpenCoffeeMachines: false,
    nameCoffeeMachines: '',

    OpenMiniFridges: false,
    nameMiniFridges: '',

    OpenChestFreezers: false,
    nameChestFreezers: '',

    openModel: false,
    openModelDining: false,
    openModelBedroom: false,
    openModelKitchen: false,
    openModelMiscellaneous: false,
    ListOfLivingRoom: [
      {
        isSelected: false,
        item: 'Tv_Stand',
        sm: 'Please include all TV stands in your move'
      },
      {
        isSelected: false,
        item: 'Arm_Decorative_Chair',
        sm:
          'Please include patio and all Armchair or decorative chairs in your move'
      },
      {
        isSelected: false,
        item: 'Futon',
        sm: 'Please include any futon in your move'
      },
      {
        isSelected: false,
        item: 'TV',
        sm: 'Please include all TV in your move'
      },
      { isSelected: false, item: 'Sofa', sm: '' },
      { isSelected: false, item: 'Love_Seat', sm: '' },
      { isSelected: false, item: 'Sofa_L_Shape', sm: '' },
      { isSelected: false, item: 'Ottoman', sm: '' },
      { isSelected: false, item: 'Reclinable_Chairs', sm: '' },
      { isSelected: false, item: 'Corner_Tables', sm: '' },
      { isSelected: false, item: 'Coffee_Tables', sm: '' },
      {
        isSelected: false,
        item: 'Decorative_Tables',
        sm: 'Please include all Decorative Tables in your move'
      }
    ],
    ListOfDiningRoom: [
      {
        isSelected: false,
        item: 'Dining_Room_Tables',
        sm: 'Please select the table surface, (wood, glass, metal, or marble )'
      },
      { isSelected: false, item: 'Dining_Room_Chairs', sm: '' },
      {
        isSelected: false,
        item: 'China_Cabinets',
        sm: 'Size - Small, Medium, or Large'
      }
    ],
    ListOfBedrooms: [
      { isSelected: false, item: 'Beds', sm: '' },
      {
        isSelected: false,
        item: 'Nightstand_Tables',
        sm: 'Please indicate # of drawers 0,1,2, 3 or 4'
      },
      {
        isSelected: false,
        item: 'Chest',
        sm: 'Please indicate # of drawers from 0 to 12'
      },
      {
        isSelected: false,
        item: 'Dresser',
        sm: 'Please indicate # of drawers Dresser with mirror or without'
      }
    ],
    ListOfKitchen: [
      {
        isSelected: false,
        item: 'Refrigerators',
        sm: 'Side by Side or Regular'
      },
      {
        isSelected: false,
        item: 'Stoves',
        sm: 'Please indicate Stove with oven or cooktop stove'
      },
      { isSelected: false, item: 'Dryers', sm: '' },
      { isSelected: false, item: 'Washers', sm: '' },
      { isSelected: false, item: 'Dryer_And_Washer_combos', sm: '' },
      { isSelected: false, item: 'Microwave_Ovens', sm: '' },
      { isSelected: false, item: 'Dishwashers', sm: '' },
      { isSelected: false, item: 'Wine_Coolers', sm: '' },
      { isSelected: false, item: 'Toaster_Ovens', sm: '' },
      { isSelected: false, item: 'Indoor_Grills', sm: '' },
      { isSelected: false, item: 'Coffee_Machines', sm: '' },
      { isSelected: false, item: 'Mini_Fridges', sm: '' },
      {
        isSelected: false,
        item: 'Chest_Freezers',
        sm: 'Size - Small, Medium, or Large'
      }
    ],
    ListOfMiscellaneous: [
      {
        isSelected: false,
        item: 'Frames',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'Area_Rugs',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'Lamps',
        sm: 'Please include all lamps, indicate if it’s a stand or table lamp'
      },
      { isSelected: false, item: 'Ceiling_Fans', sm: '' },
      {
        isSelected: false,
        item: 'Desks',
        sm: 'Size - Small, Medium, or Large'
      },
      { isSelected: false, item: 'Window_Air_Conditioner_Units', sm: '' },
      { isSelected: false, item: 'Wall_Pack_Air_Conditioner_Units', sm: '' },
      { isSelected: false, item: 'Inverter_Units', sm: '' },
      { isSelected: false, item: 'Inverter_Unit_Compressors', sm: '' },
      { isSelected: false, item: 'Boxes', sm: '' },
      { isSelected: false, item: 'Pool_Tables', sm: '' },
      { isSelected: false, item: 'Ping_Pong_Tables', sm: '' },
      { isSelected: false, item: 'Outdoor_BBQ_Grills', sm: '' },
      {
        isSelected: false,
        item: 'Fish_Tanks',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'Dog_Houses',
        sm: 'Size - Small, Medium, or Large'
      },
      { isSelected: false, item: 'Office_Chairs', sm: '' },
      {
        isSelected: false,
        item: 'Flower_Pots',
        sm: 'Size - Small, Medium, or Large'
      },
      { isSelected: false, item: 'Gym_Equipment', sm: '' },
      {
        isSelected: false,
        item: 'Benches',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'BookCases',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'Sculptures',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'Mirrors',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'Desktop_Computers',
        sm: 'Size - Small, Medium, or Large'
      },
      {
        isSelected: false,
        item: 'Gas_Tanks',
        sm: 'Size - Small, Medium, or Large'
      },
      { isSelected: false, item: 'TV_Wall_Mounts', sm: '' }
    ],
    Quantity: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 }
    ],

    Sizes: {
      Tv_Stand: ['Small', 'Medium', 'Large'],
      Arm_Decorative_Chair: ['Small', 'Medium', 'Large'],
      TV: ['13-23', '24-37', '38-51', '52-65', '66-79', '80-93', '94-100'],
      Beds: ['Twin', 'Full', 'Queen', 'King'],
      Nightstand_Tables: [0, 1, 2, 3, 4],
      Chest: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      Dresser: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      Dining_Room_Tables: ['Wood', 'Glass', 'Metal', 'Marbel'],
      China_Cabinets: ['Small', 'Medium', 'Large'],
      Refrigerators: ['Side by Side', 'Regular'],
      Stoves: ['Stove with Oven', 'Cooktop Stove'],
      Chest_Freezers: ['Small', 'Medium', 'Large'],
      Frames: ['Small', 'Medium', 'Large'],
      Area_Rugs: ['Small', 'Medium', 'Large'],
      Lamps: ['Stand Lamp', 'Table Lamp'],
      Desks: ['Small', 'Medium', 'Large'],
      Fish_Tanks: ['Small', 'Medium', 'Large'],
      Dog_Houses: ['Small', 'Medium', 'Large'],
      Flower_Pots: ['Small', 'Medium', 'Large'],
      Benches: ['Small', 'Medium', 'Large'],
      BookCases: ['Small', 'Medium', 'Large'],
      Sculptures: ['Small', 'Medium', 'Large'],
      Mirrors: ['Small', 'Medium', 'Large'],
      Desktop_Computers: ['Small', 'Medium', 'Large'],
      Gas_Tanks: ['Small', 'Medium', 'Large'],
      Gym_Equipment: ['Small', 'Medium', 'Large']
    },

    Prices: {
      Tv_Stand: [
        { size: 'Small', price: 6 },
        { size: 'Medium', price: 10 },
        { size: 'Large', price: 15 }
      ],
      Arm_Decorative_Chair: 5,
      Futon: 11,
      TV: [
        { size: '13-23', price: 4 },
        { size: '24-37', price: 7 },
        { size: '38-51', price: 10 },
        { size: '52-65', price: 15 },
        { size: '66-79', price: 20 },
        { size: '80-93', price: 26 },
        { size: '94-100', price: 30 }
      ],
      Sofa: 12,
      Sofa_L_Shape: 10,
      Love_Seat: 10,
      Ottoman: 6,
      Reclinable_Chairs: 7,
      Corner_Tables: 2,
      Coffee_Tables: 5,
      Decorative_Tables: 5,

      Beds: [
        { size: 'Twin', price: 10 },
        { size: 'Full', price: 15 },
        { size: 'Queen', price: 20 },
        { size: 'King', price: 25 }
      ],
      Nightstand_Tables: [
        { size: 0, price: 3 },
        { size: 1, price: 4 },
        { size: 2, price: 6 },
        { size: 3, price: 8 },
        { size: 4, price: 10 }
      ],
      Chest: [
        { size: 0, price: 8 },
        { size: 1, price: 8 },
        { size: 2, price: 8 },
        { size: 3, price: 8 },
        { size: 4, price: 8 },
        { size: 5, price: 12 },
        { size: 6, price: 12 },
        { size: 7, price: 12 },
        { size: 8, price: 12 },
        { size: 9, price: 18 },
        { size: 10, price: 18 },
        { size: 11, price: 18 },
        { size: 12, price: 18 }
      ],
      Dresser: [
        { size: 0, price: 10 },
        { size: 1, price: 10 },
        { size: 2, price: 10 },
        { size: 3, price: 10 },
        { size: 4, price: 10 },
        { size: 5, price: 15 },
        { size: 6, price: 15 },
        { size: 7, price: 15 },
        { size: 8, price: 15 },
        { size: 9, price: 20 },
        { size: 10, price: 20 },
        { size: 11, price: 20 },
        { size: 12, price: 20 }
      ],

      Dining_Room_Tables: [
        { size: 'Wood', price: 12 },
        { size: 'Glass', price: 15 },
        { size: 'Metal', price: 18 },
        { size: 'Marbel', price: 20 }
      ],
      Dining_Room_Chairs: 3,
      China_Cabinets: [
        { size: 'Small', price: 12 },
        { size: 'Medium', price: 15 },
        { size: 'Large', price: 25 }
      ],

      Refrigerators: [
        { size: 'Side by Side', price: 40 },
        { size: 'Regular', price: 35 }
      ],
      Stoves: [
        { size: 'Stove with Oven', price: 30 },
        { size: 'Cooktop Stove', price: 15 }
      ],
      Dryers: 30,
      Washers: 30,
      Dryer_And_Washer_combos: 55,
      Microwave_Ovens: 10,
      Dishwashers: 20,
      Wine_Coolers: 15,
      Toaster_Ovens: 10,
      Indoor_Grills: 5,
      Coffee_Machines: 4,
      Mini_Fridges: 10,
      Chest_Freezers: [
        { size: 'Small', price: 20 },
        { size: 'Medium', price: 25 },
        { size: 'Large', price: 30 }
      ],

      Frames: [
        { size: 'Small', price: 1 },
        { size: 'Medium', price: 3 },
        { size: 'Large', price: 5 }
      ],
      Area_Rugs: [
        { size: 'Small', price: 1 },
        { size: 'Medium', price: 4 },
        { size: 'Large', price: 10 }
      ],
      Lamps: [
        { size: 'Stand Lamp', price: 3 },
        { size: 'Table Lamp', price: 2 }
      ],
      Ceiling_Fans: 4,
      Desks: [
        { size: 'Small', price: 9 },
        { size: 'Medium', price: 12 },
        { size: 'Large', price: 16 }
      ],
      Window_Air_Conditioner_Units: 12,
      Wall_Pack_Air_Conditioner_Units: 20,
      Inverter_Units: 15,
      Inverter_Unit_Compressors: 10,
      Boxes: 1,
      Pool_Tables: 100,
      Ping_Pong_Tables: [],
      Outdoor_BBQ_Grills: 15,
      Fish_Tanks: [
        { size: 'Small', price: 6 },
        { size: 'Medium', price: 9 },
        { size: 'Large', price: 20 }
      ],
      Dog_Houses: [
        { size: 'Small', price: 5 },
        { size: 'Medium', price: 8 },
        { size: 'Large', price: 11 }
      ],
      Office_Chairs: 3,
      Flower_Pots: [
        { size: 'Small', price: 3 },
        { size: 'Medium', price: 5 },
        { size: 'Large', price: 9 }
      ],
      Gym_Equipment: [
        { size: 'Small', price: 15 },
        { size: 'Medium', price: 20 },
        { size: 'Large', price: 30 }
      ],
      Benches: 10,
      Book_Cases: [
        { size: 'Small', price: 5 },
        { size: 'Medium', price: 8 },
        { size: 'Large', price: 11 }
      ],
      Sculptures: [
        { size: 'Small', price: 3 },
        { size: 'Medium', price: 7 },
        { size: 'Large', price: 12 }
      ],
      Desktop_Computers: 8,
      Mirrors: [
        { size: 'Small', price: 2 },
        { size: 'Medium', price: 6 },
        { size: 'Large', price: 9 }
      ],
      Gas_Tanks: [
        { size: 'Small', price: 3 },
        { size: 'Medium', price: 6 },
        { size: 'Large', price: 10 }
      ],
      TV_Wall_Mounts: 4
    },

    details: {
      Tv_Stand: [],
      Arm_Decorative_Chair: [],
      TV: [],
      Sofa: [],
      Love_Seat: [],
      Sofa_L_Shape: [],
      Ottoman: [],
      Reclinable_Chairs: [],
      Corner_Tables: [],
      Coffee_Tables: [],
      Decorative_Tables: [],
      Futon: [],

      Dining_Room_Tables: [],
      Dining_Room_Chairs: [],
      China_Cabinets: [],

      Beds: [],
      Nightstand_Tables: [],
      Chest: [],
      Dresser: [],

      Frames: [],
      Area_Rugs: [],
      Lamps: [],
      Ceiling_Fans: [],
      Desks: [],
      Window_Air_Conditioner_Units: [],
      Wall_Pack_Air_Conditioner_Units: [],
      Inverter_Units: [],
      Inverter_Unit_Compressors: [],
      Boxes: [],
      Pool_Tables: [],
      Ping_Pong_Tables: [],
      Outdoor_BBQ_Grills: [],
      Fish_Tanks: [],
      Dog_Houses: [],
      Office_Chairs: [],
      Flower_Pots: [],
      Gym_Equipment: [],
      Benches: [],
      Book_Cases: [],
      Sculptures: [],
      Desktop_Computers: [],
      Gas_Tanks: [],
      TV_Wall_Mounts: [],

      Refrigerators: [],
      Stoves: [],
      Dryers: [],
      Washers: [],
      Dryer_And_Washer_combos: [],
      Microwave_Ovens: [],
      Dishwashers: [],
      Wine_Coolers: [],
      Toaster_Ovens: [],
      Indoor_Grills: [],
      Coffee_Machines: [],
      Mini_Fridges: [],
      Chest_Freezers: []
    }
  };

  disableLoader = () => {
    this.setState({
      loader: false
    });
  };

  handleCheckDetailsItems = () => {
    let checked = [];
    for (let i = 0; i < Object.keys(this.state.details).length; i++) {
      let item = Object.keys(this.state.details)[i];
      // console.log(this.state.details[item]);
      if (this.state.details[item].length > 0) {
        checked.push(true);
      } else {
        checked.push(false);
      }
    }
    // console.log(checked);
    return checked.filter((check) => check === true).length > 0 ? false : true;
  };
  handleOpen = (item, sm, selected, list) => {
    if (selected) {
      this.setState((prevState) => {
        let newArr = prevState[list].map((l, id) => {
          if (l.item === item) {
            return { ...l, isSelected: false };
          } else {
            return { ...l };
          }
        });
        return {
          ...prevState,
          [list]: [...newArr],
          itemsValid: this.handleCheckDetailsItems(),
          details: { ...prevState.details, [item]: [] }
        };
      });
    } else {
      this.setState({
        openModel: true,
        title: item,
        specificationMessagae: sm
      });
    }
  };
  handleCloseDining = () => {
    this.setState({ openModelDining: !this.state.openModelDining });
  };

  handleOpenDining = (item, sm, selected, list) => {
    if (selected) {
      this.setState((prevState) => {
        let newArr = prevState[list].map((l, id) => {
          if (l.item === item) {
            return { ...l, isSelected: false };
          } else {
            return { ...l };
          }
        });
        return {
          ...prevState,
          [list]: [...newArr],
          itemsValid: this.handleCheckDetailsItems(),
          details: { ...prevState.details, [item]: [] }
        };
      });
    } else {
      this.setState({
        openModelDining: true,
        title: item,
        specificationMessagae: sm
      });
    }
  };
  handleClose = () => {
    this.setState({ openModel: !this.state.openModel });
  };

  handleOpenBedroom = (item, sm, selected, list) => {
    if (selected) {
      this.setState((prevState) => {
        let newArr = prevState[list].map((l, id) => {
          if (l.item === item) {
            return { ...l, isSelected: false };
          } else {
            return { ...l };
          }
        });
        return {
          ...prevState,
          [list]: [...newArr],
          itemsValid: this.handleCheckDetailsItems(),
          details: { ...prevState.details, [item]: [] }
        };
      });
    } else {
      this.setState({
        openModelBedroom: true,
        title: item,
        specificationMessagae: sm
      });
    }
  };
  handleCloseBedroom = () => {
    this.setState({ openModelBedroom: !this.state.openModelBedroom });
  };

  handleOpenMiscellaneous = (item, sm, selected, list) => {
    // console.log(this.state.openModelMiscellaneous, this.state.title, item, sm)
    if (selected) {
      this.setState((prevState) => {
        let newArr = prevState[list].map((l, id) => {
          if (l.item === item) {
            return { ...l, isSelected: false };
          } else {
            return { ...l };
          }
        });
        return {
          ...prevState,
          [list]: [...newArr],
          itemsValid: this.handleCheckDetailsItems(),
          details: { ...prevState.details, [item]: [] }
        };
      });
    } else {
      this.setState({
        openModelMiscellaneous: true,
        title: item,
        specificationMessagae: sm
      });
    }
    // console.log(this.state.openModelMiscellaneous, this.state.title)
  };
  handleCloseMiscellaneous = () => {
    this.setState({
      openModelMiscellaneous: !this.state.openModelMiscellaneous
    });
  };
  handleOpenKitchen = (item, sm, selected, list) => {
    if (selected) {
      this.setState((prevState) => {
        let newArr = prevState[list].map((l, id) => {
          if (l.item === item) {
            return { ...l, isSelected: false };
          } else {
            return { ...l };
          }
        });
        return {
          ...prevState,
          [list]: [...newArr],
          itemsValid: this.handleCheckDetailsItems(),
          details: { ...prevState.details, [item]: [] }
        };
      });
    } else {
      this.setState({
        openModelKitchen: true,
        title: item,
        specificationMessagae: sm
      });
    }
  };
  handleCloseKitchen = () => {
    this.setState({
      openModelKitchen: !this.state.openModelKitchen
    });
  };
  handleShareholderName = (idx) => (evt) => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, nameTvStand: evt.target.value };
    });
    this.setState({ shareholders: newShareholders });
  };
  handleChangeSelect = (title, newQuantity) => {
    // console.log(newQuantity);
    let newArray = [];
    if (title === 'Gym_Equipment' && typeof newQuantity === 'string') {
      newArray.push({ id: 0, sizing: newQuantity });
      if (this.search(this.state.ListOfMiscellaneous).find) {
        this.setState((prevState) => {
          let updatedDetails = [...prevState.ListOfMiscellaneous];
          updatedDetails[this.search(this.state.ListOfMiscellaneous).index] = {
            isSelected: true,
            item: title
          };
          return {
            ...prevState,
            ListOfMiscellaneous: updatedDetails
          };
        });
      }
    } else {
      for (let i = 0; i < newQuantity; i++) {
        newArray.push({ id: i, sizing: 0 });
      }
    }
    // console.log(newArray);
    var { details } = this.state;
    details[title] = newArray;
    this.setState({ details: details }, () => {
      // console.log(this.state.details);
    });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      openModel: false,
      openModelDining: false,
      openModelBedroom: false,
      openModelKitchen: false,
      openModelMiscellaneous: false
    });
    // console.log(this.state.details)
    const { nameTvStand, shareholders } = this.state;
  };

  bedRoomChangeHandler = (e) => {
    this.setState({
      bedRoom: e.target.value
    });
  };

  diningRoomChangeHandler = (e) => {
    this.setState({
      diningRoom: e.target.value
    });
  };

  livingRoomChangeHandler = (e) => {
    this.setState({
      livingRoom: e.target.value
    });
  };

  miscChangeHandler = (e) => {
    this.setState({
      misc: e.target.value
    });
  };

  kitchenChangeHandler = (e) => {
    this.setState({
      kitchen: e.target.value
    });
  };

  search(arr) {
    // console.log(arr)
    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i] ,this.state.title)
      if (arr[i].item === this.state.title) {
        return { find: true, index: i };
      }
    }
    return { find: false };
  }
  changeSizeHandler = (sizing, id, price) => {
    if (typeof sizing === 'object') {
      sizing = sizing.target.value;
    }
    const title = this.state.title;
    if (price === undefined) {
      price = this.state.Prices[title];
    }
    console.log(title, sizing, price);
    if (this.search(this.state.ListOfLivingRoom).find) {
      this.setState((prevState) => {
        let updatedDetails = [...prevState.ListOfLivingRoom];
        updatedDetails[this.search(this.state.ListOfLivingRoom).index] = {
          isSelected: true,
          item: title
        };
        return {
          ...prevState,
          ListOfLivingRoom: updatedDetails
        };
      });
    } else if (this.search(this.state.ListOfDiningRoom).find) {
      this.setState((prevState) => {
        let updatedDetails = [...prevState.ListOfDiningRoom];
        updatedDetails[this.search(this.state.ListOfDiningRoom).index] = {
          isSelected: true,
          item: title
        };
        return {
          ...prevState,
          ListOfDiningRoom: updatedDetails
        };
      });
    } else if (this.search(this.state.ListOfBedrooms).find) {
      this.setState((prevState) => {
        let updatedDetails = [...prevState.ListOfBedrooms];
        updatedDetails[this.search(this.state.ListOfBedrooms).index] = {
          isSelected: true,
          item: title
        };
        return {
          ...prevState,
          ListOfBedrooms: updatedDetails
        };
      });
    } else if (this.search(this.state.ListOfKitchen).find) {
      this.setState((prevState) => {
        let updatedDetails = [...prevState.ListOfKitchen];
        updatedDetails[this.search(this.state.ListOfKitchen).index] = {
          isSelected: true,
          item: title
        };
        return {
          ...prevState,
          ListOfKitchen: updatedDetails
        };
      });
    } else if (this.search(this.state.ListOfMiscellaneous).find) {
      this.setState((prevState) => {
        let updatedDetails = [...prevState.ListOfMiscellaneous];
        updatedDetails[this.search(this.state.ListOfMiscellaneous).index] = {
          isSelected: true,
          item: title
        };
        return {
          ...prevState,
          ListOfMiscellaneous: updatedDetails
        };
      });
    }
    for (let i in this.state.details[title]) {
      if (this.state.details[title][i].id === id) {
        this.setState((prevState) => {
          // console.log([...prevState.details[title]])
          let updatedDetails = [...prevState.details[title]];
          updatedDetails[id] = {
            id: id,
            sizing: sizing,
            price:
              price && price.length > 0
                ? price.filter((item) => item.size === sizing)[0].price
                : price
          };
          return {
            ...prevState,
            itemsValid: false,
            details: { ...prevState.details, [title]: updatedDetails }
          };
        });
      }
    }
    console.log(this.state.details);
  };

  reserveChangeHandlerFrom = (from) => {
    this.setState({
      from: from
    });
  };
  reserveChangeHandlerTo = (to) => {
    this.setState({
      to: to
    });
  };
  reserveChangeHandlerDate = (date) => {
    this.setState({
      date: date
    });
  };

  bookNowChangeHandlerFrom = (from) => {
    this.setState({
      bookNowFrom: from
    });
  };
  bookNowChangeHandlerTo = (to) => {
    this.setState({
      bookNowTo: to
    });
  };
  bookNowChangeHandlerDate = (date) => {
    this.setState({
      bookNowDate: date
    });
  };

  lastDetailsMovingFromHandler = (from) => {
    this.setState({
      moveFrom: from
    });
  };
  lastDetailsMovingToHandler = (to) => {
    this.setState({
      moveTo: to
    });
  };
  lastDetailsLoadingDockHandler = (doc) => {
    this.setState({
      loadingDock: doc
    });
  };
  lastDetailsDoorRemovingHandler = (door) => {
    this.setState({
      doorRemoval: door
    });
  };
  lastDetaislMovingFromElevatorHandler = () => {
    this.setState((prevState) => {
      return { moveFromElevator: !prevState.moveFromElevator };
    });
  };
  lastDetaislMovingToElevatorHandler = () => {
    this.setState((prevState) => {
      return { moveToElevator: !prevState.moveToElevator };
    });
  };
  customerDetailsHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  customerPhoneHandler = (value) => {
    var reg = new RegExp(/^(?=.*\d)[\d ]+$/);

    console.log(reg.test(value));
    if (!reg.test(value)) {
      return;
    }
    let formatedValue = value;
    if (formatedValue.length === 3) {
      formatedValue = formatedValue + ' ';
    }
    if (formatedValue.length === 7) {
      formatedValue = formatedValue + ' ';
    }

    if (value.length === 13) {
      return;
    }

    this.setState({
      customerPhone: value,
      customerPhoneFormated: formatedValue
    });
  };
  handleNextEvent = async (moreInfoLink, contact) => {
    this.setState({
      loader: true
    });
    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey('AIzaSyAe-RvE9UpwF-SNkKvlpt4YpjOgDfaUCpQ');

    // set response language. Defaults to english.
    Geocode.setLanguage('en');

    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    Geocode.setRegion('pr');

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    try {
      let fromResponse = await Geocode.fromAddress(this.state.from);
      // let { lat, lng } = fromResponse.results[0].geometry.location;
      console.log(fromResponse);
      await this.setState({
        fromLatitude: fromResponse.results[0].geometry.location.lat,
        fromLongitude: fromResponse.results[0].geometry.location.lng
      });

      let toResponse = await Geocode.fromAddress(this.state.to);
      console.log(toResponse);
      // let { lat, lng } = toResponse.results[0].geometry.location;
      await this.setState({
        toLatitude: toResponse.results[0].geometry.location.lat,
        toLongitude: toResponse.results[0].geometry.location.lng
      });

      console.log(moreInfoLink);
      if (moreInfoLink) {
        if (this.state.customerName !== '') {
          let customer = await axios.post('/api/customers/addCustomer', {
            name: this.state.customerName
          });
          // console.log(customer)
          if (customer.status === 200) {
            this.setState({
              customerId: customer.data.customer._id,
              loader: false,
              showErroModal: false
            });
            this.props.history.push({
              pathname: 'moreinfo',
              state: { fromLink: 'Residential' }
            });
          }
        } else {
          this.setState({
            loader: false
          });
          this.props.history.push({
            pathname: 'moreinfo',
            state: { fromLink: 'Residential' }
          });
        }
      } else {
        this.setState({
          loader: false
        });
        this.props.history.push(contact);
      }
    } catch (err) {
      console.error(err.response);
      console.error(err.message);
      this.setState({
        errorMsg: err.message,
        loader: false,
        showErroModal: true
      });
    }
  };

  handleMoreInfoNextHandle = async (url) => {
    this.setState({
      loader: true
    });
    // console.log(this.state.details);
    let order = {
      origin: {
        lat: this.state.fromLatitude,
        lon: this.state.fromLongitude
      },
      destination: {
        lat: this.state.toLatitude,
        lon: this.state.toLongitude
      },
      items: []
    };
    console.log(this.state.details);
    try {
      if (this.state.livingRoom !== '') {
        try {
          let livingRoomRes = await axios.post('category/addCategory', {
            name: 'Living Room'
          });
          if (livingRoomRes.status === 200 || livingRoomRes.status === 201) {
            let livingRoomCategoryType = await axios.post(`types/addType`, {
              name: 'livingroom types',
              categoryId: livingRoomRes.data.category._id
            });
            if (
              livingRoomCategoryType.status === 200 ||
              livingRoomCategoryType.status === 201
            ) {
              for (let i = 0; i < this.state.ListOfLivingRoom.length; i++) {
                let items = this.state.ListOfLivingRoom[i];
                if (items.isSelected) {
                  let item = await axios.post(`items/addItem`, {
                    name: items.item.replace(/_/g, ' '),
                    cost: this.state.details[items.item].reduce(
                      (total, num) => {
                        return total + num.price;
                      },
                      0
                    ),
                    typeId: livingRoomCategoryType.data.type._id,
                    description: 'testing'
                  });
                  if (item.status === 200 || item.status === 201) {
                    order.items.push({
                      id: item.data.item._id,
                      quantity: this.state.details[items.item].length
                    });
                  }
                }
              }
            }
          }
        } catch (err) {
          console.log(err);
          this.setState({
            errorMsg: err.message,
            loader: false,
            showErroModal: true
          });
        }
      }

      if (this.state.diningRoom !== '') {
        try {
          let diningRoomRes = await axios.post('category/addCategory', {
            name: 'Dining Room'
          });
          if (diningRoomRes.status === 200 || diningRoomRes.status === 201) {
            let diningRoomCategoryType = await axios.post(`types/addType`, {
              name: 'diningroom types',
              categoryId: diningRoomRes.data.category._id
            });
            if (
              diningRoomCategoryType.status === 200 ||
              diningRoomCategoryType.status === 201
            ) {
              for (let j = 0; j < this.state.ListOfDiningRoom.length; j++) {
                let items = this.state.ListOfDiningRoom[j];
                if (items.isSelected) {
                  let item = await axios.post(`items/addItem`, {
                    name: items.item.replace(/_/g, ' '),
                    cost: this.state.details[items.item].reduce(
                      (total, num) => {
                        return total + num.price;
                      },
                      0
                    ),
                    typeId: diningRoomCategoryType.data.type._id,
                    description: 'testing'
                  });
                  if (item.status === 200 || item.status === 201) {
                    order.items.push({
                      id: item.data.item._id,
                      quantity: this.state.details[items.item].length
                    });
                  }
                }
              }
            }
          }
        } catch (err) {
          console.log(err);
          this.setState({
            errorMsg: err.message,
            loader: false,
            showErroModal: true
          });
        }
      }

      if (this.state.bedRoom !== '') {
        try {
          let bedRoomRes = await axios.post('category/addCategory', {
            name: 'Bed Room'
          });
          if (bedRoomRes.status === 200 || bedRoomRes.status === 201) {
            let bedRoomCategoryType = await axios.post(`types/addType`, {
              name: 'bedroom types',
              categoryId: bedRoomRes.data.category._id
            });
            if (
              bedRoomCategoryType.status === 200 ||
              bedRoomCategoryType.status === 201
            ) {
              for (let k = 0; k < this.state.ListOfBedrooms.length; k++) {
                let items = this.state.ListOfBedrooms[k];
                if (items.isSelected) {
                  let item = await axios.post(`items/addItem`, {
                    name: items.item.replace(/_/g, ' '),
                    cost: this.state.details[items.item].reduce(
                      (total, num) => {
                        return total + num.price;
                      },
                      0
                    ),
                    typeId: bedRoomCategoryType.data.type._id,
                    description: 'testing'
                  });
                  if (item.status === 200 || item.status === 201) {
                    order.items.push({
                      id: item.data.item._id,
                      quantity: this.state.details[items.item].length
                    });
                  }
                }
              }
            }
          }
        } catch (err) {
          console.log(err);
          this.setState({
            errorMsg: err.message,
            loader: false,
            showErroModal: true
          });
        }
      }

      if (this.state.misc !== '') {
        try {
          let miscRes = await axios.post('category/addCategory', {
            name: 'Miscellaneous'
          });
          if (miscRes.status === 200 || miscRes.status === 201) {
            let miscellaneousCategoryType = await axios.post(`types/addType`, {
              name: 'miscellaneous types',
              categoryId: miscRes.data.category._id
            });
            if (
              miscellaneousCategoryType.status === 200 ||
              miscellaneousCategoryType.status === 201
            ) {
              for (let l = 0; l < this.state.ListOfMiscellaneous.length; l++) {
                let items = this.state.ListOfMiscellaneous[l];
                if (items.isSelected) {
                  let item = await axios.post(`items/addItem`, {
                    name: items.item.replace(/_/g, ' '),
                    cost: this.state.details[items.item].reduce(
                      (total, num) => {
                        return total + num.price;
                      },
                      0
                    ),
                    typeId: miscellaneousCategoryType.data.type._id,
                    description: 'testing'
                  });
                  if (item.status === 200 || item.status === 201) {
                    order.items.push({
                      id: item.data.item._id,
                      quantity: this.state.details[items.item].length
                    });
                  }
                }
              }
            }
          }
        } catch (err) {
          console.log(err);
          this.setState({
            errorMsg: err.message,
            loader: false,
            showErroModal: true
          });
        }
      }

      if (this.state.kitchen !== '') {
        try {
          let kitchenRes = await axios.post('category/addCategory', {
            name: 'Kitchen'
          });
          if (kitchenRes.status === 200 || kitchenRes.status === 201) {
            let kitchenCategoryType = await axios.post(`types/addType`, {
              name: 'kitchen types',
              categoryId: kitchenRes.data.category._id
            });
            if (
              kitchenCategoryType.status === 200 ||
              kitchenCategoryType.status === 201
            ) {
              for (let m = 0; m < this.state.ListOfKitchen.length; m++) {
                let items = this.state.ListOfKitchen[m];
                if (items.isSelected) {
                  let item = await axios.post(`items/addItem`, {
                    name: items.item.replace(/_/g, ' '),
                    cost: this.state.details[items.item].reduce(
                      (total, num) => {
                        return total + num.price;
                      },
                      0
                    ),
                    typeId: kitchenCategoryType.data.type._id,
                    description: 'testing'
                  });
                  if (item.status === 200 || item.status === 201) {
                    order.items.push({
                      id: item.data.item._id,
                      quantity: this.state.details[items.item].length
                    });
                  }
                }
              }
            }
          }
        } catch (err) {
          console.log(err);
          this.setState({
            errorMsg: err.message,
            loader: false,
            showErroModal: true
          });
        }
      }

      console.log(order);

      if (order.items.length > 0) {
        try {
          let submitOrder = await axios.post(`order/addOrder`, {
            origin: order.origin,
            destination: order.destination,
            items: order.items,
            customer: this.state.customerId
          });
          if (submitOrder.status === 200 || submitOrder.status === 201) {
            console.log(submitOrder);
            this.setState({
              totalPrice: parseFloat(submitOrder.data.order.totalPrice),
              orderId: submitOrder.data.order._id,
              customerId: submitOrder.data.order.customerId,
              loader: false,
              showErroModal: false
            });

            if (url === '') {
              this.props.history.push({ pathname: '/lastdetail' });
            } else {
              this.props.history.push({ pathname: url });
            }
          }
        } catch (err) {
          console.log(err.message);
          if (err.response) {
            this.setState({
              errorMsg: err.response.data.message,
              loader: false,
              showErroModal: true
            });
          } else {
            this.setState({
              errorMsg: err.message,
              loader: false,
              showErroModal: true
            });
          }
          // this.setState({
          //   totalPrice: submitOrder.data.totalPrice,
          //   orderId: submitOrder.data.order.id,
          //   loader: false,
          //   showErroModal: false
          // });

          // if (url === '') {
          //   this.props.history.push({ pathname: '/review' });
          // } else {
          //   this.props.history.push({ pathname: url });
          // }

          // this.setState({
          //   errorMsg: err.message,
          //   loader: false,
          //   showErroModal: true
          // });
          // let deleteCustomer = await axios.post(
          //   `/customers/delete/${this.state.npm}`
          // );
          // if (deleteCustomer.status === 200) {
          // }
        }
      }
    } catch (err) {
      console.log(err);
      this.setState({
        errorMsg: err.message,
        loader: false,
        showErroModal: true
      });
    }
  };

  handleCloseModal = () => {
    this.setState({
      showErroModal: false
    });
  };

  saveAndBookLaterHandler = () => {};

  saveNowHandler = async () => {
    this.setState({
      loader: true
    });
    console.log(this.state.cities, this.state.from);
    console.log(
      this.state.cities.filter((city) => city.name === this.state.from)
    );
    let reservation = {
      reservation: {
        fromLatitude: this.state.fromLatitude,
        fromLongitude: this.state.fromLongitude,
        toLatitude: this.state.toLatitude,
        toLongitude: this.state.toLongitude,
        totalAmount: this.state.totalPrice,
        amountPaid: this.state.totalPrice - (this.state.totalPrice / 100) * 5
      },
      finalStepForm: this.state.finalStepForm,
      npm: this.state.npm,
      customerId: this.state.customerId,
      areaId: this.state.cities.filter(
        (city) => city.name === this.state.from
      )[0]._id
    };
    try {
      let reservationResponse = await axios.post(
        'reservations/addReservation',
        reservation
      );
      let jobsData = {
        status: 'unassigned',
        areaId: this.state.cities.filter(
          (city) => city.name === this.state.from
        )[0]._id,
        orderId: this.state.orderId,
        customerId: this.state.customerId
      };
      if (
        reservationResponse.status === 200 ||
        reservationResponse.status === 201
      ) {
        let addJobRes = await axios.post(`jobs/addJob`, jobsData);
        if (addJobRes.status === 200 || addJobRes.status === 201) {
          this.setState({
            errorMsg: '',
            showErroModal: true,
            loader: false,
            livingRoom: '',
            diningRoom: '',
            bedRoom: '',
            misc: '',
            kitchen: '',
            itemsValid: true,

            finalStepForm: {
              fullName: '',
              email: '',
              phone: '',
              address: '',
              cardNumber: '',
              expiry: '',
              expiry_month: '',
              expiry_year: '',
              cvc: ''
            },

            npm: '',
            customerName: '',
            customerEmail: '',
            customerPhone: '',

            from: '',
            to: '',
            fromLatitude: '',
            fromLongitude: '',
            toLatitude: '',
            toLongitude: '',
            date: new Date(),
            time: new Date(),

            totalPrice: '',

            bookNowFrom: '',
            bookNowTo: '',
            bookNowdate: '',

            moveFrom: '',
            moveFromElevator: false,
            moveToElevator: false,
            moveTo: '',
            loadingDock: '',
            doorRemoval: '',

            specificationMessagae: '',

            title: 'TV',
            ListOfLivingRoom: [
              {
                isSelected: false,
                item: 'Tv_Stand',
                sm: 'Please include all TV stands in your move'
              },
              {
                isSelected: false,
                item: 'Arm_Decorative_Chair',
                sm:
                  'Please include patio and all Armchair or decorative chairs in your move'
              },
              {
                isSelected: false,
                item: 'Futon',
                sm: 'Please include any futon in your move'
              },
              {
                isSelected: false,
                item: 'TV',
                sm: 'Please include all TV in your move'
              },
              { isSelected: false, item: 'Sofa', sm: '' },
              { isSelected: false, item: 'Love_Seat', sm: '' },
              { isSelected: false, item: 'Sofa_L_Shape', sm: '' },
              { isSelected: false, item: 'Ottoman', sm: '' },
              { isSelected: false, item: 'Reclinable_Chairs', sm: '' },
              { isSelected: false, item: 'Corner_Tables', sm: '' },
              { isSelected: false, item: 'Coffee_Tables', sm: '' },
              {
                isSelected: false,
                item: 'Decorative_Tables',
                sm: 'Please include all Decorative Tables in your move'
              }
            ],
            ListOfDiningRoom: [
              {
                isSelected: false,
                item: 'Dining_Room_Tables',
                sm:
                  'Please select the table surface, (wood, glass, metal, or marble )'
              },
              { isSelected: false, item: 'Dining_Room_Chairs', sm: '' },
              {
                isSelected: false,
                item: 'China_Cabinets',
                sm: 'Size - Small, Medium, or Large'
              }
            ],
            ListOfBedrooms: [
              { isSelected: false, item: 'Beds', sm: '' },
              {
                isSelected: false,
                item: 'Nightstand_Tables',
                sm: 'Please indicate # of drawers 0,1,2, 3 or 4'
              },
              {
                isSelected: false,
                item: 'Chest',
                sm: 'Please indicate # of drawers from 0 to 12'
              },
              {
                isSelected: false,
                item: 'Dresser',
                sm:
                  'Please indicate # of drawers Dresser with mirror or without'
              }
            ],
            ListOfKitchen: [
              {
                isSelected: false,
                item: 'Refrigerators',
                sm: 'Side by Side or Regular'
              },
              {
                isSelected: false,
                item: 'Stoves',
                sm: 'Please indicate Stove with oven or cooktop stove'
              },
              { isSelected: false, item: 'Dryers', sm: '' },
              { isSelected: false, item: 'Washers', sm: '' },
              { isSelected: false, item: 'Dryer_And_Washer_combos', sm: '' },
              { isSelected: false, item: 'Microwave_Ovens', sm: '' },
              { isSelected: false, item: 'Dishwashers', sm: '' },
              { isSelected: false, item: 'Wine_Coolers', sm: '' },
              { isSelected: false, item: 'Toaster_Ovens', sm: '' },
              { isSelected: false, item: 'Indoor_Grills', sm: '' },
              { isSelected: false, item: 'Coffee_Machines', sm: '' },
              { isSelected: false, item: 'Mini_Fridges', sm: '' },
              {
                isSelected: false,
                item: 'Chest_Freezers',
                sm: 'Size - Small, Medium, or Large'
              }
            ],
            ListOfMiscellaneous: [
              {
                isSelected: false,
                item: 'Frames',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'Area_Rugs',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'Lamps',
                sm:
                  'Please include all lamps, indicate if it’s a stand or table lamp'
              },
              { isSelected: false, item: 'Ceiling_Fans', sm: '' },
              {
                isSelected: false,
                item: 'Desks',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'Window_Air_Conditioner_Units',
                sm: ''
              },
              {
                isSelected: false,
                item: 'Wall_Pack_Air_Conditioner_Units',
                sm: ''
              },
              { isSelected: false, item: 'Inverter_Units', sm: '' },
              { isSelected: false, item: 'Inverter_Unit_Compressors', sm: '' },
              { isSelected: false, item: 'Boxes', sm: '' },
              { isSelected: false, item: 'Pool_Tables', sm: '' },
              { isSelected: false, item: 'Ping_Pong_Tables', sm: '' },
              { isSelected: false, item: 'Outdoor_BBQ_Grills', sm: '' },
              {
                isSelected: false,
                item: 'Fish_Tanks',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'Dog_Houses',
                sm: 'Size - Small, Medium, or Large'
              },
              { isSelected: false, item: 'Office_Chairs', sm: '' },
              {
                isSelected: false,
                item: 'Flower_Pots',
                sm: 'Size - Small, Medium, or Large'
              },
              { isSelected: false, item: 'Gym_Equipment', sm: '' },
              {
                isSelected: false,
                item: 'Benches',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'BookCases',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'Sculptures',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'Desktop_Computers',
                sm: 'Size - Small, Medium, or Large'
              },
              {
                isSelected: false,
                item: 'Gas_Tanks',
                sm: 'Size - Small, Medium, or Large'
              },
              { isSelected: false, item: 'TV_Wall_Mounts', sm: '' }
            ],
            details: {
              Tv_Stand: [],
              Arm_Decorative_Chair: [],
              TV: [],
              Sofa: [],
              Love_Seat: [],
              Sofa_L_Shape: [],
              Ottoman: [],
              Reclinable_Chairs: [],
              Corner_Tables: [],
              Coffee_Tables: [],
              Decorative_Tables: [],
              Futon: [],

              Dining_Room_Tables: [],
              Dining_Room_Chairs: [],
              China_Cabinets: [],

              Beds: [],
              Nightstand_Tables: [],
              Chest: [],
              Dresser: [],

              Frames: [],
              Area_Rugs: [],
              Lamps: [],
              Ceiling_Fans: [],
              Desks: [],
              Window_Air_Conditioner_Units: [],
              Wall_Pack_Air_Conditioner_Units: [],
              Inverter_Units: [],
              Inverter_Unit_Compressors: [],
              Boxes: [],
              Pool_Tables: [],
              Ping_Pong_Tables: [],
              Outdoor_BBQ_Grills: [],
              Fish_Tanks: [],
              Dog_Houses: [],
              Office_Chairs: [],
              Flower_Pots: [],
              Gym_Equipment: [],
              Benches: [],
              Book_Cases: [],
              Sculptures: [],
              Desktop_Computers: [],
              Gas_Tanks: [],
              TV_Wall_Mounts: [],

              Refrigerators: [],
              Stoves: [],
              Dryers: [],
              Washers: [],
              Dryer_And_Washer_combos: [],
              Microwave_Ovens: [],
              Dishwashers: [],
              Wine_Coolers: [],
              Toaster_Ovens: [],
              Indoor_Grills: [],
              Coffee_Machines: [],
              Mini_Fridges: [],
              Chest_Freezers: []
            }
          });
        }
        this.props.history.push({ pathname: '/dashboard' });
      }
    } catch (err) {
      console.log(err.response.data);
      if (err.response.data.message) {
        this.setState({
          errorMsg: err.message,
          loader: false,
          showErroModal: true
        });
      } else if (err.response.data.error) {
        this.setState({
          errorMsg: err.response.data.error,
          loader: false,
          showErroModal: true
        });
      }
    }
  };

  contactDetailsHandler = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  customerDateHandler = (date) => {
    this.setState({
      date: date
    });
  };

  customerTimeHandler = (time) => {
    this.setState({
      time: time
    });
  };
  submitContactHandler = async (route) => {
    this.setState({
      loader: true
    });
    let data = {
      contactName: this.state.contactName,
      email: this.state.contactEmail,
      businessName: this.state.contactBusinessName,
      timeToContact: this.state.contactDate,
      phoneNo: this.state.contactPhone
    };
    if (route === 'booknow') {
      data.contactName = this.state.customerName;
      data.email = this.state.customerEmail;
      data.businessName = this.state.customerBussinessName;
      data.timeToContact = this.state.date;
      data.phoneNo = this.state.customerBusinessPhone;
    }

    try {
      let contactRes = await axios.post('commercial/addCustomer', data);
      if (contactRes.status === 200 || contactRes.status === 201) {
        this.setState({
          loader: false,
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          contactBusinessName: '',
          contactDate: '',
          from: '',
          to: '',
          fromLatitude: '',
          fromLongitude: '',
          toLatitude: '',
          toLongitude: '',
          customerId: '',
          customerName: '',
          customerEmail: '',
          customerPhone: '',
          customerBussinessName: '',
          customerBusinessPhone: '',
          date: new Date(),
          time: new Date()
        });
        this.props.history.push('thankyou');
      }
    } catch (err) {
      console.log(err);
      this.setState({
        errorMsg: err.message,
        loader: false,
        showErroModal: true
      });
    }
  };
  bookNowResidentialHandler = async (href, flag) => {
    if (flag) {
      this.props.history.push({
        pathname: 'reserve',
        state: { fromLink: 'BookNow' }
      });
    }
    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey('AIzaSyAe-RvE9UpwF-SNkKvlpt4YpjOgDfaUCpQ');

    // set response language. Defaults to english.
    Geocode.setLanguage('en');

    // set response region. Its optional.
    // A Geocoding request with region=es (Spain) will return the Spanish city.
    Geocode.setRegion('pr');

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    try {
      let fromResponse = await Geocode.fromAddress(this.state.from);
      // let { lat, lng } = fromResponse.results[0].geometry.location;
      await this.setState({
        fromLatitude: fromResponse.results[0].geometry.location.lat,
        fromLongitude: fromResponse.results[0].geometry.location.lng
      });

      let toResponse = await Geocode.fromAddress(this.state.to);
      // let { lat, lng } = toResponse.results[0].geometry.location;
      await this.setState({
        toLatitude: toResponse.results[0].geometry.location.lat,
        toLongitude: toResponse.results[0].geometry.location.lng
      });

      if (this.state.customerName !== '') {
        let customer = await axios.post('customers/addCustomer', {
          name: this.state.customerName
        });
        // console.log(customer)
        if (customer.status === 200) {
          this.setState({
            npm: customer.data.customer._id,
            from: '',
            to: '',
            contactName: '',
            contactEmail: '',
            contactPhone: '',
            contactBusinessName: '',
            contactDate: '',
            date: new Date(),
            time: new Date(),
            loader: false
          });
          this.props.history.push({
            pathname: href,
            state: { fromLink: 'BookNow' }
          });
        }
      }
    } catch (e) {
      console.error(e);
      this.setState({
        loader: false,
        errorMsg: e.message,
        showErroModal: true
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.itemsValid !== prevState.itemsValid) {
      this.setState({
        itemsValid: this.handleCheckDetailsItems()
      });
    }
  }
  componentWillUpdate(prevProps, prevState) {
    if (this.state.itemsValid !== prevState.itemsValid) {
      this.setState({
        itemsValid: this.handleCheckDetailsItems()
      });
    }
  }
  componentDidMount() {
    // let ZoneAndAreas= {
    //   'Zone 1':[
    //     'Aguadila',
    //     'Aguada',
    //     'Rincón',
    //     'Moca',
    //     'Añasco',
    //     'San Sebastián',
    //     'Isabela',
    //     'Quebradillas',
    //     'Camuy',
    //     'Hatillo',
    //     'Arecibo',
    //     'Lares',
    //     'Utuado',
    //     'Florida',
    //     'Barceloneta',
    //     'Ciales',
    //     'Manatí',
    //     'Vega Baja',
    //     'Morovis',
    //     'Corozal',
    //     'Vega Alta',
    //   ],
    //   'Zone 2':[
    //     'Naranjito',
    //     'Toa Alta',
    //     'Dorado',
    //     'Toa Baja',
    //     'Cataño',
    //     'Bayamón',
    //     'Guaynabo',
    //     'Aguas Buenas',
    //     'Gurabo',
    //     'Trujillo Alto',
    //     'Carolina',
    //     'Loíza',
    //     'Canóvanas',
    //     'Río Grande',
    //     'Luquillo',
    //     'Fajardo',
    //   ],

    //   'Zone 3':[

    //     'Mayagüez',
    //     'Hormigueros',
    //     'Cabo Rojo',
    //     'Maricao',
    //     'San Germán',
    //     'Lajas',
    //     'Sabana Grande',
    //     'Guánica',
    //     'Yauco',
    //     'Guayanilla',
    //     'Adjuntas',
    //     'Peñuelas',
    //     'Ponce',
    //     'Jayuya',
    //     'Juana Díaz',
    //     'Villalba',
    //     'Las Marías',
    //   ],

    //   'Zone 4':[

    //     'Coamo',
    //     'Santa Isabel',
    //     'Salinas',
    //     'Aibonito',
    //     'Barranquitas',
    //     'Cidra',
    //     'Cayey',
    //     'Salinas',
    //     'Guayama',
    //     'Arroyo',
    //     'Maunabo',
    //     'Yabucoa',
    //     'Humacao',
    //     'Las Piedras',
    //     'San Lorenzo',
    //     'Orocovis',
    //     'Comerio',
    //     'Naguabo',
    //     'Ceiba',
    //   ]

    // }
    //     for(let x in ZoneAndAreas){
    //       console.log(x)
    //       axios.post('http://localhost:3001/api/zone/addNewZone', {name : x , description:x}).then(resp=>{
    //         if(resp.status === 200 || resp.status === 201){
    //           for(let i = 0; i < ZoneAndAreas[x].length; i++){
    //             axios.post(`http://localhost:3001/api/area/addArea`, {name : ZoneAndAreas[x][i], description: ZoneAndAreas[x][i], zoneId:resp.data.zone._id}).then(res => {
    //               console.log(res)
    //             }).catch(err=>{
    //               console.error(err)
    //             })
    //           }
    //         }
    //       }).catch(err =>{

    //         console.error(err)
    //       })
    //     }
    this.getCititesData();
  }

  getCititesData = async () => {
    try {
      let allZones = await axios.get('zone/getAll');

      if (allZones.status === 200) {
        for (let i = 0; i < allZones.data.zones.length; i++) {
          console.log(allZones);
          let area = await axios.get(
            `/area/getAreaByZone/${allZones.data.zones[i]._id}`
          );

          if (area.status === 200) {
            console.log(area);
            this.setState((prevState) => {
              return { cities: [...prevState.cities, ...area.data.area] };
            });
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  gotToFinalStepPage = () => {
    this.props.history.push('/final-step');
  };
  finalStepFormHandler = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        finalStepForm: {
          ...prevState.finalStepForm,
          [name]: value
        }
      };
    });
  };

  handleCardNumber = (e) => {
    const value = e.target.value;

    if (value.length === 20) {
      return;
    } else if (value.length === 4) {
      this.setState((prevState) => {
        return {
          ...prevState,
          finalStepForm: {
            ...prevState.finalStepForm,
            cardNumber: value + ' '
          }
        };
      });
    } else if (value.length === 9) {
      this.setState((prevState) => {
        return {
          ...prevState,
          finalStepForm: {
            ...prevState.finalStepForm,
            cardNumber: value + ' '
          }
        };
      });
    } else if (value.length === 14) {
      this.setState((prevState) => {
        return {
          ...prevState,
          finalStepForm: {
            ...prevState.finalStepForm,
            cardNumber: value + ' '
          }
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          finalStepForm: {
            ...prevState.finalStepForm,
            cardNumber: value
          }
        };
      });
    }
  };

  handleExpiry = (e) => {
    const value = e.target.value;

    if (value.length === 6) {
      return;
    } else if (value.length === 2) {
      this.setState((prevState) => {
        return {
          ...prevState,
          finalStepForm: {
            ...prevState.finalStepForm,
            expiry: value + '/'
          }
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          finalStepForm: {
            ...prevState.finalStepForm,
            expiry: value
          }
        };
      });
    }
  };
  handleCvc = (e) => {
    const value = e.target.value;

    if (value.length === 4) {
      return;
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          finalStepForm: {
            ...prevState.finalStepForm,
            cvc: value
          }
        };
      });
    }
  };
  render() {
    return (
      <StepperDataContext.Provider
        value={{
          ...this.state,
          handleOpen: this.handleOpen,
          handleCloseDining: this.handleCloseDining,
          handleOpenDining: this.handleOpenDining,
          handleClose: this.handleClose,
          handleOpenBedroom: this.handleOpenBedroom,
          handleCloseBedroom: this.handleCloseBedroom,
          handleOpenMiscellaneous: this.handleOpenMiscellaneous,
          handleCloseMiscellaneous: this.handleCloseMiscellaneous,
          handleOpenKitchen: this.handleOpenKitchen,
          handleCloseKitchen: this.handleCloseKitchen,
          handleShareholderName: this.handleShareholderName,
          handleChangeSelect: this.handleChangeSelect,
          handleSubmit: this.handleSubmit,
          bedRoomChangeHandler: this.bedRoomChangeHandler,
          diningRoomChangeHandler: this.diningRoomChangeHandler,
          livingRoomChangeHandler: this.livingRoomChangeHandler,
          miscChangeHandler: this.miscChangeHandler,
          kitchenChangeHandler: this.kitchenChangeHandler,
          changeSizeHandler: this.changeSizeHandler,
          reserveChangeHandlerFrom: this.reserveChangeHandlerFrom,
          reserveChangeHandlerTo: this.reserveChangeHandlerTo,
          reserveChangeHandlerDate: this.reserveChangeHandlerDate,
          lastDetailsMovingFromHandler: this.lastDetailsMovingFromHandler,
          lastDetailsMovingToHandler: this.lastDetailsMovingToHandler,
          lastDetailsLoadingDockHandler: this.lastDetailsLoadingDockHandler,
          lastDetailsDoorRemovingHandler: this.lastDetailsDoorRemovingHandler,
          lastDetaislMovingFromElevatorHandler: this
            .lastDetaislMovingFromElevatorHandler,
          lastDetaislMovingToElevatorHandler: this
            .lastDetaislMovingToElevatorHandler,
          bookNowChangeHandlerFrom: this.bookNowChangeHandlerFrom,
          bookNowChangeHandlerTo: this.bookNowChangeHandlerTo,
          bookNowChangeHandlerDate: this.bookNowChangeHandlerDate,
          customerDetailsHandler: this.customerDetailsHandler,
          handleNextEvent: this.handleNextEvent,
          handleMoreInfoNextHandle: this.handleMoreInfoNextHandle,
          saveAndBookLaterHandler: this.saveAndBookLaterHandler,
          saveNowHandler: this.saveNowHandler,
          contactDetailsHandler: this.contactDetailsHandler,
          submitContactHandler: this.submitContactHandler,
          bookNowResidentialHandler: this.bookNowResidentialHandler,
          handleCloseModal: this.handleCloseModal,
          customerPhoneHandler: this.customerPhoneHandler,
          customerDateHandler: this.customerDateHandler,
          customerTimeHandler: this.customerTimeHandler,
          finalStepFormHandler: this.finalStepFormHandler,
          gotToFinalStepPage: this.gotToFinalStepPage,
          handleCardNumber: this.handleCardNumber,
          handleExpiry: this.handleExpiry,
          handleCvc: this.handleCvc,
          handleCheckDetailsItems: this.handleCheckDetailsItems
        }}>
        {this.props.children}
      </StepperDataContext.Provider>
    );
  }
}

export default withRouter(StepperDataContextProvider);
