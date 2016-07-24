using System;

namespace TA
{
    public class BootGrid
    {
        public int current { get; set; }
        public int rowCount { get; set; }
        public Object rows { get; set; }
        public int total { get; set; }

        public BootGrid(int _current, int _rowCount, Object _rows, int _total)
        {
            current = _current;
            rowCount = _rowCount;
            rows = _rows;
            total = _total;
        }
    }
}