var mongoose = require("mongoose");

var workerSchema = new mongoose.Schema({
  D_M: String,
  WRKRID: String,
  RLSN: String,
  WRKRNAME: String,
  FNAME: String,
  DIVISION: String,
  CATEGORY: String,
  BOOK_NO: Number,
  SEX: String,
  AGECATA: String,
  PFSTATUS: String,
  PFNO: Number,
  DOFB: Date,
  DOFJ: Date,
  DT_PER: String,
  RET_DH_A: String,
  REDT: String,
  BASIC: Number,
  WRCD: String,
  GRAD: String,
  CS_LV: String,
  EL_LV: String,
  SICK: String,
  AVL_SICK: String,
  ALWG: String,
  LIC: String,
  DSGN: String,
  FMLY_STAT: String,
  F_CODE: String,
  LINE_NO: String,
  HOUSENO: String,
  R_TYPE: String,
  AD_DEP: String,
  MI_DEP: String,
  P_POST: String,
  CF: String,
  BF: String,
  GRAD2: String,
  BASIC1: String,
  REMARKS: String,
  NAME2: String,
  dailyentries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Dailyentries'
    }
  ]
});

module.exports = mongoose.model("Workers", workerSchema);