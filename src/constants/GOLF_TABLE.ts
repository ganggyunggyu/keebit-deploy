// ✅ 개별 타입 정의
export interface GolfTime {
  hour: number;
  timeRange: string;
}

export interface GolfReservation {
  zoneId: number;
  hour: number;
}

export interface GolfRepair {
  zoneId: number;
  hour: number;
}

// ✅ 골프존 ID 목록 (단순 숫자 배열)
export const GOLF_ZONE_TABLE: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ✅ 시간 테이블 배열 (객체 타입 적용)
export const GOLF_TIME_TABLE: GolfTime[] = [
  { hour: 5, timeRange: '5:00 ~ 6:00' },
  { hour: 6, timeRange: '6:00 ~ 7:00' },
  { hour: 7, timeRange: '7:00 ~ 8:00' },
  { hour: 8, timeRange: '8:00 ~ 9:00' },
  { hour: 9, timeRange: '9:00 ~ 10:00' },
  { hour: 10, timeRange: '10:00 ~ 11:00' },
  { hour: 11, timeRange: '11:00 ~ 12:00' },
  { hour: 12, timeRange: '12:00 ~ 13:00' },
  { hour: 13, timeRange: '13:00 ~ 14:00' },
  { hour: 14, timeRange: '14:00 ~ 15:00' },
  { hour: 15, timeRange: '15:00 ~ 16:00' },
  { hour: 16, timeRange: '16:00 ~ 17:00' },
  { hour: 17, timeRange: '17:00 ~ 18:00' },
  { hour: 18, timeRange: '18:00 ~ 19:00' },
  { hour: 19, timeRange: '19:00 ~ 20:00' },
  { hour: 20, timeRange: '20:00 ~ 21:00' },
  { hour: 21, timeRange: '21:00 ~ 22:00' },
];

// ✅ 예약 및 수리 테이블 (타입 적용)
export const GOLF_RESERVATION_TABLE: GolfReservation[] = [{ zoneId: 2, hour: 5 }];
export const GOLF_REPAIR_TABLE: GolfRepair[] = [{ zoneId: 1, hour: 5 }];
