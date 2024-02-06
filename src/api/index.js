import moment from "moment";

export const getHotelList = () => {
  return [
    {
      id: 1,
      name: "Creepy House",
      maxPx: 3,
      availability: {
        from: moment()
          .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
          .format(),
        to: moment()
          .add(29, "d")
          .add(1, "M")
          .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
          .format(),
      },

      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Nice House",
      maxPx: 3,
      availability: {
        from: moment()
          .subtract(2, "d")
          .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
          .format(),
        to: moment()
          .add(10, "d")
          .add(2, "M")
          .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
          .format(),
      },

      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Medium House",
      maxPx: 3,
      availability: {
        from: moment()
          .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
          .format(),
        to: moment()
          .add(1, "M")
          .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
          .format(),
      },

      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "'I would move here' House",
      maxPx: 6,
      availability: {
        from: moment().add(2, "d").format(),
        to: moment().add(1, "M").format(),
      },

      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
};
