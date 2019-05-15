using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using WebMatrix.WebData;
using Chms.Data.Models;
using BLL;
using System.IO;
using System.Data.OleDb;
using System.Data;
using System.Globalization;

namespace ChurchManagementSystem.Controllers
{
    public class MemberController : Controller
    {
        private MemberRepository _mRepo;
        private WorkersRepository _wRepo;
        ChmsContext db = new ChmsContext();
        
        // GET: Member
        public ActionResult Index()
        {
            ViewBag.PageName = "Member Management";
            ViewBag.Title = "Member Management";
            if (TempData["Message"] != null) ViewBag.Success = TempData["Message"];
            if (TempData["Error"] != null) ViewBag.Error = TempData["Error"];

            List<Member> Members = db.Members.Where(x => x.FirstName != null).ToList();

            return View(Members);
        }

        //GET
        public PartialViewResult _AddMember()
        {
            Member member = new Member();
            return PartialView(member);
        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public ActionResult AddMember(Member collection)
        {
            //if (emailSufixExists(collection.EmailSuffix) != null)
            //{
            //	TempData["Error"] = "Email Suffix " + collection.EmailSuffix + " already existing! the email suffix supplied cannot be used";
            //	return RedirectToAction("Index");
            //}
            SimpleMembershipProvider membershipProvider = (SimpleMembershipProvider)Membership.Provider;
            SimpleRoleProvider simpleRoleProvider = (SimpleRoleProvider)Roles.Provider;

            try
            {
                if (string.IsNullOrEmpty(collection.PhoneNumber) || string.IsNullOrEmpty(collection.FirstName) || string.IsNullOrEmpty(collection.Sex) || string.IsNullOrEmpty(collection.Address) || string.IsNullOrEmpty(collection.LastName))
                {
                    TempData["Error"] = "Kindly check all fields to ensure that they are filled";
                    return RedirectToAction("Index");
                }
                else
                {
                    try
                    {
                        //if (RetailerManagement.ExistRetailer(collection.Name))
                        //{
                        //	TempData["Error"] = "Retailer already exist. Kindly check your entries.";
                        //	return RedirectToAction("Index");
                        //}
                        //else
                        //{
                        //this means we can save
                        Member newMember = new Member();
                        //Worker newWorker = new Worker();
                        newMember.FirstName = collection.FirstName;
                        newMember.LastName = collection.LastName;
                        newMember.Sex = collection.Sex;
                        newMember.PhoneNumber = collection.PhoneNumber;
                        newMember.Address = collection.Address;
                        newMember.Anniversary = collection.Anniversary;
                        newMember.DOB = collection.DOB;
                        //newMember.UniqueCode = collection.UniqueCode;
                        newMember.Email = collection.Email;
                        newMember.Salutation = collection.Salutation;
                        //newMember.IsWorker = collection.IsWorker;

                        db.Members.Add(newMember);
                        db.SaveChanges();
                        //LogAudit.LogAuditTrail(User.Identity.Name, UserActivityEnum.UserActivity.CreateNewRetailer, UserActionsEnum.UserActions.AddNewRecord, null, newRetailer, Request.UserHostAddress);
                        //}
                    }
                    catch (Exception ex)
                    {
                        TempData["Error"] = ex.Message;
                        return RedirectToAction("Index");
                    }
                }
                TempData["Message"] = "Successfully Added";
                return RedirectToAction("Index");
            }
            catch (Exception ex)
            {
                TempData["Error"] = ex.Message;
                return RedirectToAction("Index");
            }
        }
        [HttpPost]
        public ActionResult Delete(int id = 0)
        {
            if (id > 0)
            {
                var msg = "Member Record Delete Successful!";
                _mRepo = new MemberRepository();
                var op = _mRepo.GetById(id);
                var success = _mRepo.Delete(op);
                if (success >= 0)
                {
                    Console.WriteLine("Deleted successfully");

                }
                return RedirectToAction("Index");
            }
            return null;
        }

        public ActionResult _EditMember(int id)
        {
            DAL.Member member = _mRepo.GetById(id);
            return PartialView(member);
        }

        [HttpPost]
        public ActionResult EditMember(Member collection)
        {
            try
            {
                if (string.IsNullOrEmpty(collection.PhoneNumber) || string.IsNullOrEmpty(collection.FirstName) || string.IsNullOrEmpty(collection.Sex) || string.IsNullOrEmpty(collection.Address) || string.IsNullOrEmpty(collection.LastName))
                {
                    TempData["Error"] = "Kindly check all fields to ensure that they are filled";
                    return RedirectToAction("Index");
                }
                else
                {
                    try
                    {
                        //this means we can save
                        Member newMember = new Member();
                        newMember.FirstName = collection.FirstName;
                        newMember.LastName = collection.LastName;
                        newMember.Sex = collection.Sex;
                        newMember.PhoneNumber = collection.PhoneNumber;
                        newMember.Address = collection.Address;
                        newMember.Anniversary = collection.Anniversary;
                        newMember.DOB = collection.DOB;
                        newMember.UniqueCode = collection.UniqueCode;
                        newMember.Email = collection.Email;
                        newMember.Salutation = collection.Salutation;

                        db.Members.Add(newMember);
                        db.SaveChanges();
                    }
                    catch (Exception ex)
                    {
                        TempData["Error"] = ex.Message;
                        return RedirectToAction("Index");
                    }
                }
                TempData["Message"] = "Successfully Updated";
                return RedirectToAction("Index");
            }
            catch (Exception ex)
            {
                TempData["Error"] = ex.Message;
                return RedirectToAction("Index");
            }
        }
        public ActionResult Details(int id)
        {
			List<Member> memberDetails = new List<Member>();
			using (ChmsContext db = new ChmsContext())
			{
				memberDetails = db.Members.Where(x => x.Id == id).ToList();
				ViewBag.MemberDetails = memberDetails;
			}
				//List<Member> Members = db.Members.Where(x => x.Id == id).ToList();
            return View(memberDetails);
        }
        public ActionResult Submit(HttpPostedFileBase file)
        {
            if (file != null)
            {
                if (file.ContentLength > 0 && (Path.GetExtension(file.FileName) == ".xls" || Path.GetExtension(file.FileName) == ".xlsx"))
                {
                    var fileName = Path.GetFileName(file.FileName);
                    var path = Path.Combine(Server.MapPath("~/App_Data/uploads"), fileName);
                    file.SaveAs(path);
                    ReadDataFromExcelFiles(path);
                }
            }
            return RedirectToAction("Index");
        }

        /// <summary>
        /// This method is used to get the data source and read the data from files.
        /// </summary>
        private void ReadDataFromExcelFiles(string savedExcelFiles)
        {
            //Create a connection string to access the data of Excel file by the help of Microsoft ACE OLEDB providers.
            var connectionString = string.Format("Provider=Microsoft.ACE.OLEDB.12.0;Data Source={0};Extended Properties=\"Excel 12.0 Xml; HDR = YES\";", savedExcelFiles);

            //Fill the DataSet by the Sheets.
            //OleDbConnection excelConnection = new OleDbConnection(connectionString);
            //excelConnection.Open();
            var sql = "select * from [Sheet1$]";
            var adapter = new OleDbDataAdapter(sql, connectionString);
            adapter.TableMappings.Add("Table", "TestTable");
            var ds = new DataSet();
            List<Member> uploadExl = new List<Member>();

            adapter.Fill(ds, "Member");
            DataTable data = ds.Tables["Member"];

            GetSetUploadExcelData(uploadExl, data);
        }

        public void GetSetUploadExcelData(List<Member> members, DataTable data)
        {
            DateTime dt;
            for (int i = 0; i < data.Rows.Count; i++)
            {
                var NewMember = new Member();
                NewMember.FirstName = Convert.ToString(data.Rows[i]["First Name"]);
                NewMember.LastName = Convert.ToString(data.Rows[i]["Last Name"]);
                NewMember.Address = Convert.ToString(data.Rows[i]["Address"]);
                //NewMember.Anniversary = DateTime.TryParseExact(data.Rows[i]["Anniversary"].ToString(), "yyyy-dd-MM hh:mm tt", CultureInfo.InvariantCulture, DateTimeStyles.None, out dt);
                NewMember.Anniversary = DateTime.Parse(data.Rows[i]["Anniversary"].ToString());
                NewMember.DOB = DateTime.Parse(data.Rows[i]["DOB"].ToString());
               // NewMember.DOB = Convert.ToDecimal(data.Rows[i]["Lat"]);
                NewMember.Email = Convert.ToString(data.Rows[i]["Email"]);
                NewMember.PhoneNumber = Convert.ToString(data.Rows[i]["Phone Number"]);
                NewMember.Sex = Convert.ToString(data.Rows[i]["Sex"]);
                NewMember.Salutation = Convert.ToString(data.Rows[i]["Salutation"]);
                //NewMember.RetailerID = UserManagement.GetRetailerIDFromUsername(User.Identity.Name);

                if (NewMember.FirstName != "" && NewMember.PhoneNumber != null)
                {
                    if (db.Members.Find(NewMember.FirstName) == null)
                    {
                        db.Members.Add(NewMember);
                        db.SaveChanges();
                    }
                }
            }
        }

    }
}