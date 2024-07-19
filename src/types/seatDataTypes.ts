export type Seat = {
    seatId: number;
    seatNumber: number;
    status: string;
};

export type Row = {
    rowId: number;
    row: string;
    seats: Seat[];
};

export type SeatsData = Row[];


export type SelectedSeatWithRow = {
    rowId: number;
    row: string;
    seat: Seat;
  };