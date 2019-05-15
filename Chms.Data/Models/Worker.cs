namespace Chms.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Worker")]
    public partial class Worker
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [Column("Worker")]
        public bool? Worker1 { get; set; }

        [StringLength(250)]
        public string Description { get; set; }

        public DateTime? DateCreated { get; set; }
    }
}
